const express = require('express')
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { User, Spot, Booking, Review, ReviewImage, SpotImage, sequelize } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();
const { Sequelize, Op } = require('sequelize');

//set up validation
const validateSpot = [
    check('address')
        .exists({ checkFalsy: true })
        .withMessage('Street address is required'),
    check('city')
        .exists({ checkFalsy: true })
        .withMessage('City is required'),
    check('state')
        .exists({ checkFalsy: true })
        .withMessage('State is required'),
    check('country')
        .exists({ checkFalsy: true })
        .withMessage('Country is required'),
    check('lat')
        .exists({ checkFalsy: true })
        .isFloat({ min: -90.0, max: 90.0 })
        .withMessage('Latitude is not valid'),
    check('lng')
        .exists({ checkFalsy: true })
        .isFloat({ min: -180.0, max: 180.0 })
        .withMessage('Longitude is not valid'),
    check('name')
        .exists({ checkFalsy: true })
        .isLength({ max: 50 })
        .withMessage('Name must be less than 50 characters'),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Description is required'),
    check('price')
        .exists({ checkFalsy: true })
        .isDecimal()
        .withMessage('Price per day as integer is required'),
    handleValidationErrors
];

//validate reviews
const validateReview = [
    check('review')
        .exists({ checkFalsy: true })
        .withMessage('Review text is required'),
    check('stars')
        .exists({ checkFalsy: true })
        .withMessage('Stars must be an integer from 1 to 5'),
    handleValidationErrors
];

//validate bookings
const validateBooking = [
    check('startDate')
        .exists({ checkFalsy: true })
        .withMessage('Start day is required'),
    check('endDate')
        .exists({ checkFalsy: true })
        .withMessage('End day is required'),
    handleValidationErrors
];

//calculate average rating to use for all later spot returns
const avgRate = async (spotId) => {
    const avgR = await Review.findAll({
        where: {
            spotId
        },
        raw: true,
        next: true,
        attributes: [[sequelize.fn('AVG', sequelize.col('stars')),
            'avgRating'
        ]]
    })
    return avgR;
}

//Get all Spots, Auth:false
router.get('/', async (req, res) => {
    let { page, size, minLat, maxLat, minLng, maxLng, minPrice, maxPrice } = req.query;

    //pagination
    if (!page) { page = 1 };
    if (!size) { size = 20 };
    if (page > 10) { page = 10 };
    if (size > 20) { size = 20 };

    let pagination = {};
    if (page >= 1 && size >= 1) {
        pagination.limit = size;
        pagination.offset = size * (page - 1)
    }

    //Query validation error response
    if (page <= 0 || size <= 0 || minPrice < 0 || maxPrice < 0 || maxLat < minLat || maxLng < minLng || maxPrice < minPrice || maxLat > 90 || minLat < -90 || maxLng > 180 || minLng < -180) {
        res.status(400);
        return res.json({
            message: "Validation Error",
            statusCode: 400,
            errors: {
                page: "Page must be greater than or equal to 1",
                size: "Size must be greater than or equal to 1",
                maxLat: "Maximum latitude is invalid",
                minLat: "Minimum latitude is invalid",
                minLng: "Minimum longitude is invalid",
                maxLng: "Maximum longitude is invalid",
                minPrice: "Minimum price must be greater than or equal to 0",
                maxPrice: "Maximum price must be greater than or equal to 0"
            }
        })
    }

    //query filters
    const where = {};
    if (minLat) { where.lat = { [Op.gte]: parseFloat(minLat) } };
    if (maxLat) { where.lat = { [Op.lte]: parseFloat(maxLat) } };
    if (minLng) { where.lng = { [Op.gte]: parseFloat(minLng) } };
    if (maxLng) { where.lng = { [Op.lte]: parseFloat(maxLng) } };
    if (minPrice) { where.price = { [Op.gte]: parseFloat(minPrice) } };
    if (maxPrice) { where.price = { [Op.lte]: parseFloat(maxPrice) } };

    let allspots = await Spot.findAll({ where, ...pagination });
    let Spots = [];
    allspots.forEach(spot => {
        Spots.push(spot.toJSON());
    })

    for (let i = 0; i < Spots.length; i++) {
        //add average rating to spot
        const avgR = await avgRate(Spots[i].id);
        const avgRvalue = avgR[0].avgRating === null ? 0 : avgR[0].avgRating;
        const avgRvalFixed = Number(avgRvalue).toFixed(1);

        Spots[i].avgRating = parseFloat(avgRvalFixed);

        //add image preview to spot
        const prevImgUrl = await SpotImage.findOne({
            raw: true,
            nest: true,
            where: {
                spotId: Spots[i].id,
                preview: true,
            },
        })

        if (prevImgUrl) {
            Spots[i].previewImage = prevImgUrl.url
        } else {
            Spots[i].previewImage = null
        }
    }

    return res.json({
        Spots,
        page,
        size
    })

})


// Create a spot, Auth:true
router.post('/', requireAuth, validateSpot, async (req, res) => {
    const { address, city, state, country, lat, lng, name, description, price } = req.body;
    const newSpot = await Spot.create({ ownerId: req.user.id, address, city, state, country, lat, lng, name, description, price });

    res.status(201);
    return res.json(
        newSpot
    )
})


//Add an image to a spot based on spot's id
//Auth:true, spot belong to owner
router.post('/:spotId/images', requireAuth, async (req, res) => {
    const { url, preview } = req.body;
    let userId = req.user.id;
    let spotId = req.params.spotId;

    const spot = await Spot.findByPk(spotId)
    if (!spot) {
        res.status(404);
        return res.json({
            message: "Spot couldn't be found",
            statusCode: 404,
        })
    }

    if (spot.toJSON().ownerId == userId) {
        const newSpotImage = await SpotImage.create({ spotId: spotId, url, preview })
        const returnNewImage = await SpotImage.findByPk(newSpotImage.id, {
            attributes: ['id', 'url', 'preview']
        })
        return res.json(returnNewImage)
    } else {
        res.status(403);
        return res.json({
            message: "Spot must belong to the current user",
            statusCode: 403,
        })
    }

})


//Get all spots owned by the current user, Auth:true
router.get('/current', requireAuth, async (req, res) => {
    let userId = req.user.id;
    const Spots = await Spot.findAll({
        where: {
            ownerId: userId
        },
        raw: true,
        nest: true,
    });

    for (let i = 0; i < Spots.length; i++) {
        //add average rating to spot
        const avgR = await avgRate(Spots[i].id);
        const avgRvalue = avgR[0].avgRating === null ? 0 : avgR[0].avgRating;
        const avgRvalFixed = Number(avgRvalue).toFixed(1);

        Spots[i].avgRating = parseFloat(avgRvalFixed);

        //add image preview to spot
        const prevImgUrl = await SpotImage.findOne({
            raw: true,
            nest: true,
            where: {
                spotId: Spots[i].id,
                preview: true,
            },
        })

        if (prevImgUrl) {
            Spots[i].previewImage = prevImgUrl.url
        } else {
            Spots[i].previewImage = null
        }
    }

    return res.json({
        Spots
    })

})


//Get details for a spot from an id, Auth:false
// router.get('/:spotId', requireAuth, async (req, res) => {
router.get('/:spotId', async (req, res) => {
    let spotId = req.params.spotId;
    const spot = await Spot.findByPk(spotId, { raw: true, nest: true })

    if (!spot) {
        res.status(404);
        return res.json({
            message: "Spot couldn't be found",
            statusCode: 404,
        })
    }

    //add numReviews to spot
    const reviews = await Review.findAll({
        where: {
            spotId: spotId
        },
        raw: true,
        nest: true,
    })
    spot.numReviews = reviews.length;

    //add average rating to spot
    const avgR = await avgRate(spotId);
    const avgRvalue = avgR[0].avgRating === null ? 0 : avgR[0].avgRating;
    const avgRvalFixed = Number(avgRvalue).toFixed(1);
    spot.avgStarRating = parseFloat(avgRvalFixed);

    //add spotimages to spot
    const spotimages = await SpotImage.findAll({
        where: { spotId: spotId },
        attributes: ['id', 'url', 'preview']
    })
    spot.SpotImages = spotimages;

    //add owner to spot
    spot.Owner = await User.findOne({
        where: { id: spot.ownerId },
        attributes: ['id', 'firstName', 'lastName']
    })

    return res.json(
        spot
    )
})


//Edit a spot, Auth:true, spot belong to current user
router.put('/:spotId', requireAuth, validateSpot, async (req, res) => {
    const { address, city, state, country, lat, lng, name, description, price } = req.body;
    let userId = req.user.id;
    let spotId = req.params.spotId;

    const spot = await Spot.findByPk(spotId)
    if (!spot) {
        res.status(404);
        return res.json({
            message: "Spot couldn't be found",
            statusCode: 404,
        })
    }

    if (spot.toJSON().ownerId == userId) {
        spot.update({ address, city, state, country, lat, lng, name, description, price });
        return res.json(spot)
    } else {
        res.status(403);
        return res.json({
            message: "Spot must belong to the current user",
            statusCode: 403,
        })
    }
})


//Delete a spot, Auth:true, spot belong to current user
router.delete('/:spotId', requireAuth, async (req, res) => {
    let userId = req.user.id;
    let spotId = req.params.spotId;

    const spot = await Spot.findByPk(spotId)
    if (!spot) {
        res.status(404);
        return res.json({
            message: "Spot couldn't be found",
            statusCode: 404,
        })
    }

    if (spot.toJSON().ownerId == userId) {
        spot.destroy();
        return res.json({
            message: "Successfully deleted",
            statusCode: 200,
        })
    } else {
        res.status(403);
        return res.json({
            message: "Spot must belong to the current user",
            statusCode: 403,
        })
    }

})


// Create a review for a spot based on the spot's id
//Auth:true
router.post('/:spotId/reviews', requireAuth, validateReview, async (req, res) => {
    const { review, stars } = req.body;

    let userId = req.user.id;
    let spotId = parseInt(req.params.spotId);

    const spot = await Spot.findByPk(spotId)
    if (!spot) {
        res.status(404);
        return res.json({
            message: "Spot couldn't be found",
            statusCode: 404,
        })
    }

    const spotReviews = await Review.findOne({
        where: {
            userId: userId,
            spotId: spotId,
        }
    })
    if (spotReviews) {
        res.status(403);
        return res.json({
            message: "User already has a review for this spot",
            statusCode: 403,
            // errors: "User already has a review for this spot",
        })
    }

    if (stars > 0 && stars <= 5) {
        const newReview = await Review.create({ userId, spotId, review, stars })
        res.status(201);
        return res.json(newReview)

    } else {
        res.status(400);
        return res.json({
            message: "Validation error",
            statusCode: 400,
            // errors: "Stars must be an integer from 1 to 5"
            // errors: {
            //     stars: "Stars must be an integer from 1 to 5",
            // }
        })
    }
})


//Get all reviews by a spot's id, Auth:false
router.get('/:spotId/reviews', async (req, res) => {
    // let userId = req.user.id;
    let spotId = parseInt(req.params.spotId);
    // console.log('backend spotId------------', spotId)
    const spot = await Spot.findByPk(spotId)
    if (!spot) {
        res.status(404);
        return res.json({
            message: "Spot couldn't be found",
            statusCode: 404,
        })
    }

    const Reviews = await Review.findAll({
        where: { spotId },
        include: [
            {
                model: User,
                attributes: ['id', 'firstName', 'lastName']
            },
            {
                model: ReviewImage,
                attributes: ['id', 'url']
            },
        ],
    })

    return res.json({ Reviews })
})


//Create a booking from a spot based on the spot's id
//Auth:true, spot must not belong to current user
router.post('/:spotId/bookings', requireAuth, validateBooking, async (req, res) => {
    const { startDate, endDate } = req.body;
    // console.log('startDate, endDate !!!!!!!!!!!!!!!!!!!!!!!', startDate, endDate)

    let userId = req.user.id;
    let spotId = req.params.spotId;
    // console.log('spotId !!!!!!!!!!!!!!!!!!', spotId)
    //check spot exist
    const spot = await Spot.findByPk(spotId)
    if (!spot) {
        res.status(404);
        return res.json({
            message: "Spot couldn't be found",
            statusCode: 404,
        })
    }

    //check spot must NOT belong to current user
    if (spot.toJSON().ownerId == userId) {
        res.status(403);
        return res.json({
            message: "Spot must NOT belong to the current user",
            statusCode: 403,
        })
    }

    // booking end date is bigger than start date
    if (startDate >= endDate) {
        res.status(400);
        return res.json({
            message: "Validation error",
            statusCode: 400,
            errors: {
                endDate: "endDate cannot be on or before startDate"
            }
        })
    }

    //no conflict booking
    const checkBooking = await Booking.findAll({
        where: {
            spotId,
            [Op.or]:
                [{
                    startDate: { [Op.lte]: startDate },
                    endDate: { [Op.gte]: endDate },
                },
                {
                    startDate: { [Op.gte]: startDate, [Op.lte]: endDate }
                },
                {
                    endDate: { [Op.lte]: endDate, [Op.gte]: startDate, }
                }]
        }
    })

    if (checkBooking.length) {
        res.status(403);
        return res.json({
            message: "Sorry, this spot is already booked for the specified dates",
            statusCode: 403,
            errors: {
                startDate: "Start date conflicts with an existing booking",
                endDate: "End date conflicts with an existing booking"
            }
        })
    }

    const newBooking = await Booking.create({ spotId, userId, startDate: new Date(startDate), endDate: new Date(endDate) })
    // console.log('error!!!!!!!!!!!!!!!!!!!!!!!!!!', res.json())
    return res.json(newBooking);
})


//Get all bookings for a spot based on the spot's id
//Auth:true
router.get('/:spotId/bookings', requireAuth, async (req, res) => {
    let userId = req.user.id;
    let spotId = parseInt(req.params.spotId);

    //check spot exist
    const spot = await Spot.findByPk(spotId)
    if (!spot) {
        res.status(404);
        return res.json({
            message: "Spot couldn't be found",
            statusCode: 404,
        })
    }

    if (spot.toJSON().ownerId == userId) {
        const Bookings = await Booking.findAll({
            where: {
                spotId,
            },
            include: [{
                model: User,
                attributes: ['id', 'firstName', 'lastName']
            }]
        })
        return res.json({ Bookings });
    } else {
        const Bookings = await Booking.findAll({
            where: { spotId },
            attributes: ['id', 'spotId', 'startDate', 'endDate']
        })
        return res.json({ Bookings });
    }
})


//Get all spots by search term, Auth:false
router.get('/search/:keyword', async (req, res) => {
    const keyword = req.params.keyword.toLowerCase();
    console.log("backend API search keyword ----------", keyword)
    // const keyword = req.params.keyword;
    const Spots = await Spot.findAll({
        where: {
            [Op.or]: [
                // { name: { [Op.like]: `%${keyword}%` } },
                {
                    name: Sequelize.where(
                        Sequelize.fn("LOWER", Sequelize.col("name")),
                        { [Op.like]: `%${keyword}%` }
                    )
                },
                {
                    city: Sequelize.where(
                        Sequelize.fn("LOWER", Sequelize.col("city")),
                        { [Op.like]: `%${keyword}%` }
                    )
                },
                {
                    state: Sequelize.where(
                        Sequelize.fn("LOWER", Sequelize.col("state")),
                        { [Op.like]: `%${keyword}%` }
                    )
                }
                // { name: { [Op.like]: `%${keyword}%` } },
                // { city: { [Op.like]: `%${keyword}%` } },
                // { state: { [Op.like]: `%${keyword}%` } }
            ]
        },
        raw: true,
        nest: true,
    });

    for (let i = 0; i < Spots.length; i++) {
        //add average rating to spot
        const avgR = await avgRate(Spots[i].id);
        const avgRvalue = avgR[0].avgRating === null ? 0 : avgR[0].avgRating;
        const avgRvalFixed = Number(avgRvalue).toFixed(1);

        Spots[i].avgRating = parseFloat(avgRvalFixed);

        //add image preview to spot
        const prevImgUrl = await SpotImage.findOne({
            raw: true,
            nest: true,
            where: {
                spotId: Spots[i].id,
                preview: true,
            },
        })

        if (prevImgUrl) {
            Spots[i].previewImage = prevImgUrl.url
        } else {
            Spots[i].previewImage = null
        }
    }

    return res.json({
        Spots
    })

})

module.exports = router;
