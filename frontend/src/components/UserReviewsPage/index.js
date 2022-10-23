import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { useHistory } from "react-router";
// import { listUserSpots } from '../../store/spots';
import { listUserReviewsThunk } from '../../store/reviews';
import { deleteReviewThunk } from '../../store/reviews';

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

    //for delete
    const handleDelete = async (reviewId) => {
        if (window.confirm('Do you want to delete this review?')) {
            await dispatch(deleteReviewThunk(reviewId))
            // history.replace(`/reviews/current`)
        }
    }

    return (
        <div className='user-listing-page'>
            <div>
                <h1 className='user-listing-page-title'>{`Reviews by ${currUser.firstName}`} </h1>
            </div>
            <div className='user-all-listings'>
                {reviews && (
                    reviews.map(review => (
                        <div key={review.id} className='user-each-listing'>
                            <div className='listed-spot'>
                                <div className='listed-spot-image'>
                                    <img className='spot-image-size' src={review.Spot?.previewImage} />
                                </div>
                                <div className='listed-spot-info'>
                                    <div className='listed-spot-info-name'>{`Review for ${review.Spot?.name}`}</div>
                                    <div className='listed-spot-info-time'>
                                        {review?.createdAt.slice(0, 10)}
                                    </div>
                                    <div className='listed-reviews-review'>
                                        {review?.review}
                                    </div>
                                </div>
                            </div>
                            <div className='listed-spot-edit-delete-button'>
                                <button onClick={() => handleDelete(review.id)}>Delete Review</button>
                            </div>
                        </div>

                    ))
                )}
            </div>
        </div>
    )

}

export default UserReviewsPage;
