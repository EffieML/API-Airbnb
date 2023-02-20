const express = require('express')
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { User, Spot, Booking, Review, ReviewImage, SpotImage, sequelize } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();
const { Op } = require('sequelize');


//Get all of the current user's bookings
//Auth:true
router.get('/current', requireAuth, async (req, res) => {
    let userId = req.user.id;
    // console.log("backend userId---------", userId)
    const Bookings = await Booking.findAll({
        where: { userId },
        raw: true,
        nest: true,
        include: [{
            model: Spot,
            attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'price']
        }]
    })

    for (let i = 0; i < Bookings.length; i++) {
        const prevImgUrl = await SpotImage.findOne({
            raw: true,
            nest: true,
            where: {
                spotId: Bookings[i].spotId,
                preview: true,
            },
        })

        if (prevImgUrl) {
            Bookings[i].Spot.previewImage = prevImgUrl.url
        } else {
            Bookings[i].Spot.previewImage = null
        }
    }

    return res.json({
        Bookings
    })
})


//Edit a booking, Auth:true, booking must belong to current user
router.put('/:bookingId', requireAuth, async (req, res) => {
    const { startDate, endDate } = req.body;
    let userId = req.user.id;
    let bookingId = parseInt(req.params.bookingId);

    // booking end date is bigger than start date
    if (startDate >= endDate) {
        res.status(400);
        return res.json({
            message: "Validation error",
            statusCode: 400,
            errors: {
                endDate: "endDate cannot come before startDate"
            }
        })
    }

    //check booking exist
    const booking = await Booking.findByPk(bookingId)
    if (!booking) {
        res.status(404);
        return res.json({
            message: "Booking couldn't be found",
            statusCode: 404,
        })
    }

    //can't edit a booking past the end date
    const today = new Date();
    if (booking.toJSON().endDate < today) {
        res.status(403);
        return res.json({
            message: "Past bookings can't be modified",
            statusCode: 403,
        })
    }


    //can't edit booking to a past date
    if (new Date(startDate) < today || new Date(endDate) < today) {
        res.status(403);
        return res.json({
            message: "booking can't use past date",
            statusCode: 403,
        })
    }
    //booking must belong to current user
    if (booking.toJSON().userId == userId) {

        //no conflict booking
        const spotId = booking.toJSON().spotId;
        const currId = booking.toJSON().id;
        const checkBooking = await Booking.findAll({
            where: {
                spotId,
                id: {
                    [Op.ne]: currId
                },
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
                    }],
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
        booking.update({ spotId, userId, startDate: new Date(startDate), endDate: new Date(endDate) });
        return res.json(booking);

    } else {
        res.status(403);
        return res.json({
            message: "Booking must belong to the current user",
            statusCode: 403,
        })
    }
})


//Delete a booking, Auth:true,
// booking belong to curr user or spot belong to curr user
router.delete('/:bookingId', requireAuth, async (req, res) => {
    let userId = req.user.id;
    let bookingId = parseInt(req.params.bookingId);

    //check booking exist
    const booking = await Booking.findByPk(bookingId)
    if (!booking) {
        res.status(404);
        return res.json({
            message: "Booking couldn't be found",
            statusCode: 404,
        })
    }

    const today = new Date();
    if (booking.toJSON().startDate < today) {
        res.status(403);
        return res.json({
            message: "Bookings that have been started can't be deleted",
            statusCode: 403,
        })
    }

    const spot = await Spot.findByPk(booking.toJSON().spotId);
    const spotOwnerId = spot.toJSON().ownerId;

    if (booking.toJSON().userId == userId) {
        booking.destroy();
        return res.json({
            message: "Successfully deleted",
            statusCode: 200,
        })
    } else if (spotOwnerId == userId) {
        booking.destroy();
        return res.json({
            message: "Successfully deleted",
            statusCode: 200,
        })
    } else {
        res.status(403);
        return res.json({
            message: "Booking or Spot must belong to the current user",
            statusCode: 403,
        })
    }

})



module.exports = router;
