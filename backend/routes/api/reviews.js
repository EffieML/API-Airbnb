const express = require('express')
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { User, Spot, Booking, Review, ReviewImage, SpotImage, sequelize } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();
const { Op } = require('sequelize');

//set up validation
const validateReview = [
    check('review')
        .exists({ checkFalsy: true })
        .withMessage('Review text is required'),
    check('stars')
        .exists({ checkFalsy: true })
        .withMessage('Stars must be an integer from 1 to 5'),
    handleValidationErrors
];


// Add an image to a review based on the review's id
//Auth:true,   reivew belong to current user
router.post('/:reviewId/images', requireAuth, async (req, res) => {
    const { url } = req.body;
    let userId = req.user.id;
    let reviewId = req.params.reviewId;

    const review = await Review.findByPk(reviewId);
    if (!review) {
        res.status(404);
        return res.json({
            message: "Review couldn't be found",
            statusCode: 404,
        })
    }

    //review mush belong to current use
    if (review.toJSON().userId == userId) {

        //find and count all images belong to the review
        const reviewImgs = await ReviewImage.findAll({
            raw: true,
            next: true,
            where: {
                reviewId: reviewId
            }
        })
        const imgNums = reviewImgs.length;
        // If review num less than 10, add review
        if (imgNums < 10) {
            const newImg = await ReviewImage.create({ reviewId, url });
            return res.json({ id: newImg.id, url: newImg.url })
        } else {
            res.status(403);
            return res.json({
                message: "Maximum number of images for this resource was reached",
                statusCode: 403,
            })
        }
    } else {
        res.status(403);
        return res.json({
            message: "Review must belong to the current user",
            statusCode: 403,
        })
    }

})


// Get all reviews of the current user
//Auth:true
router.get('/current', requireAuth, async (req, res) => {
    let userId = req.user.id;

    const Reviews = await Review.findAll({
        where: { userId },
        include: [
            {
                model: User,
                attributes: ['id', 'firstName', 'lastName']
            },
            {
                model: Spot,
                attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'price']
            },
            {
                model: ReviewImage,
                attributes: ['id', 'url']
            },
        ],
    })

    for (let i = 0; i < Reviews.length; i++) {
        const currReview = Reviews[i].toJSON();

        const prevImgUrl = await SpotImage.findOne({
            raw: true,
            nest: true,
            where: {
                spotId: currReview.spotId,
                preview: true,
            },
        })
        if (prevImgUrl) {
            currReview.Spot.previewImage = prevImgUrl.url
        } else {
            currReview.Spot.previewImage = null
        }

        Reviews[i] = currReview;
    }

    return res.json({ Reviews })
})


//Edit a review, Auth:true, review must belong to current user
router.put('/:reviewId', requireAuth, validateReview, async (req, res) => {
    const { review, stars } = req.body;
    let userId = req.user.id;
    let reviewId = req.params.reviewId;

    const editReview = await Review.findByPk(reviewId)
    if (!editReview) {
        res.status(404);
        return res.json({
            message: "Review couldn't be found",
            statusCode: 404,
        })
    }

    if (editReview.toJSON().userId == userId) {
        if (stars > 0 && stars <= 5) {
            editReview.update({ review, stars });
            return res.json(editReview)
        } else {
            res.status(400);
            return res.json({
                message: "Validation error",
                statusCode: 400,
                errors: {
                    stars: "Stars must be an integer from 1 to 5",
                }
            })
        }
    } else {
        res.status(403);
        return res.json({
            message: "Review must belong to the current user",
            statusCode: 403,
        })
    }
})


//Delete a review, Auth:true, review must belong to current user
router.delete('/:reviewId', requireAuth, async (req, res) => {
    let userId = req.user.id;
    let reviewId = req.params.reviewId;

    const review = await Review.findByPk(reviewId)
    if (!review) {
        res.status(404);
        return res.json({
            message: "Review couldn't be found",
            statusCode: 404,
        })
    }

    if (review.toJSON().userId == userId) {
        review.destroy();
        return res.json({
            message: "Successfully deleted",
            statusCode: 200,
        })
    } else {
        res.status(403);
        return res.json({
            message: "Review must belong to the current user",
            statusCode: 403,
        })
    }
})




module.exports = router;
