import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { useHistory } from "react-router";
import { listUserSpots } from '../../store/spots';
import AddNewSpotModal from '../AddNewSpotModal';
import EditSpotModal from '../EditSpotModal';
import { listUserReviewsThunk } from '../../store/reviews';

function UserReviewsPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const currUser = useSelector(state => state.session.user)
    const reviewsObj = useSelector(state => state.reviews.user)
    // console.log("reviews for user  reviewsObj: ", reviewsObj)
    const reviews = Object.values(reviewsObj)
    // console.log("reviews for user  reviews: ", reviews)
    // console.log("reviews for user  reviews img: ", reviews[0].Spot.previewImage)

    useEffect(() => {
        dispatch(listUserReviewsThunk());
    }, [dispatch]);

    // if user is not logged in, need to redirect to main page
    if (!currUser) return <Redirect to='/' />

    // if statement locate below useEffect
    if (reviews.length == 0) return null;

    return (
        <div className='user-reviews-section'>
            <h1>{`Reviews by ${currUser.firstName}`} </h1>
            {reviews && (
                reviews.map(review => (
                    <div key={review.id}>
                        <img src={review.Spot?.previewImage} />
                        <div>{`Review for ${review.Spot?.name}`}</div>
                        <div>
                            {review?.createdAt}
                        </div>
                        <div>
                            {review?.review}
                        </div>
                        <button>delete review</button>
                    </div>

                ))
            )}
        </div>
    )

}

export default UserReviewsPage;
