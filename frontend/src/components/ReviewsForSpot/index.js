import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { listSpotReviewsThunk } from '../../store/reviews';
import './ReviewsForSpot.css';


function ListSpotReviews({ spot }) {
    const dispatch = useDispatch();
    const reviewsObj = useSelector(state => state.reviews.spot)
    console.log("reviews for spot  reviewsObj: ", reviewsObj)
    const reviews = Object.values(reviewsObj)
    console.log("reviews for spot  reviews: ", reviews)


    useEffect(() => {
        dispatch(listSpotReviewsThunk(+spot.id));
    }, [dispatch]);

    // if statement locate below useEffect
    if (reviews.length == 0) return null;

    console.log("review user: ", reviews[0].User)
    if (!reviews[0].User) return null;

    return (
        <div className='spot-reviews-bottom-section'>
            <>
                {reviews && (
                    reviews.map(review => (
                        <div className="each-spot-review">
                            <div key={review.id} >
                                <div className="each-spot-review-firstName">{review.User?.firstName ? review.User.firstName : "you just posted"}</div>
                                <div className="each-spot-review-createTime">
                                    {review.createdAt.slice(0, 10)}
                                </div>
                                <div className="each-spot-review-review">
                                    {review.review}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </>


        </div>

    )
}


export default ListSpotReviews;
