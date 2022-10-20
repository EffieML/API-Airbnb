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

    return (
        <div className='spot-reviews-section'>
            {reviews && (
                reviews.map(review => (
                    <>
                        <div>{review.User.firstName}</div>
                        <div>
                            {review.createdAt}
                        </div>
                        <div>
                            {review.review}
                        </div>
                    </>
                ))
            )}
        </div>

    )
}


export default ListSpotReviews;
