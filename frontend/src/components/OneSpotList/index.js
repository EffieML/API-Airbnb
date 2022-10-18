import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { useParams, Route } from 'react-router-dom';
import { listOneSpot } from '../../store/spots';
import './OneSpotList.css';

function OneSpotList() {
    const dispatch = useDispatch();
    const { spotId } = useParams();
    // console.log("spot Id: ", spotId)
    const spot = useSelector(state => state.spots.singleSpot)
    // console.log("OneSpotList spotObj: ", spot)
    // console.log("spot name:", spot.name)
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        dispatch(listOneSpot(spotId)).then(() => setIsLoaded(true));
    }, [dispatch, spotId]);

    if (!spot) return null;

    return (
        <div className='one-spot-list'>
            {isLoaded && (
                <>
                    <div className='spot-title-and-image-section'>
                        <div className='spot-title-section' >
                            <h1 className='spot-title'>{spot.name}</h1>
                            <div className='spot-title-info'>
                                <span>
                                    <i className="fa-solid fa-star" />
                                </span>
                                <span>{spot.avgStarRating ? spot.avgStarRating.toFixed(2) : 'New'}</span>
                                <span> · </span>
                                <span> {`${spot.numReviews} reviews`} </span>
                                <span> · </span>
                                <span>{`${spot.city}, ${spot.state}, ${spot.country}`}</span>
                            </div>
                        </div>
                        <div className='spot-image-section'>
                            <div className='spot-image-main-left'>
                                <img src={spot.SpotImages[0].url} alt='Spot preview image' />
                            </div>
                            <div className='spot-image-middle'>
                                {spot.SpotImages[1] && (<img src={spot.SpotImages[1].url} />)}
                                {spot.SpotImages[2] && (<img src={spot.SpotImages[2].url} />)}
                            </div>
                            <div className='spot-image-right'>
                                {spot.SpotImages[3] && (<img src={spot.SpotImages[3].url} />)}
                                {spot.SpotImages[4] && (<img src={spot.SpotImages[4].url} />)}
                            </div>
                        </div>
                    </div>

                    <div className='spot-detail-and-booking-section'>
                        <div className='spot-detail-section-left'>
                            <h2 className='spot-owner-first-name'>{`Entire home hosted by ${spot.Owner.firstName}`}</h2>
                            <span className='spot-description'>{spot.description}</span>
                        </div>
                        <div className='spot-booking-section-right'>
                            <div className='spot-booking-top'>
                                <div className='spot-booking-top-left'>
                                    <span>{`$${spot.price} `}</span>
                                    <span>  night</span>
                                </div>
                                <div className='spot-booking-top-right'>
                                    <span>
                                        <i className="fa-solid fa-star" />
                                    </span>
                                    <span>{spot.avgStarRating ? spot.avgStarRating.toFixed(2) : 'New'}</span>
                                    <span> · </span>
                                    <span> {`${spot.numReviews} reviews`} </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='spot-review-section'>
                        <h2>
                            <span>
                                <i className="fa-solid fa-star" />
                            </span>
                            <span>{spot.avgStarRating ? spot.avgStarRating.toFixed(2) : 'New'}</span>
                            <span> · </span>
                            <span> {`${spot.numReviews} reviews`} </span>
                        </h2>
                        <div>list all spots reviews</div>
                    </div>
                </>
            )}
        </div>
    )
}

export default OneSpotList;
