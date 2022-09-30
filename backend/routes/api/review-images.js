const express = require('express')
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { User, Spot, Booking, Review, ReviewImage, SpotImage, sequelize } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();
const { Op } = require('sequelize');



//Delete an image for a review, Auth:true, review must belong to curr user
router.delete('/:imageId', requireAuth, async (req, res) => {
    let userId = req.user.id;
    let imageId = parseInt(req.params.imageId);

    //check image exist
    const image = await ReviewImage.findByPk(imageId)
    if (!image) {
        res.status(404);
        return res.json({
            message: "Review Image couldn't be found",
            statusCode: 404,
        })
    }

    const review = await Review.findByPk(image.toJSON().reviewId);
    const reviewUserId = review.toJSON().userId;

    if (reviewUserId == userId) {
        image.destroy();
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
