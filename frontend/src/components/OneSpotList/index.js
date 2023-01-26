import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Route } from 'react-router-dom';
import { listOneSpot } from '../../store/spots';
import ShowCalendar from './Calendar'
import ListSpotReviews from '../ReviewsForSpot';
import AddNewReviewModal from '../AddNewReviewModal';
import superhost from '../../img/superhost.PNG';
import locationdrop from '../../img/locationdrop.PNG';
import keylogo from '../../img/keylogo.PNG';
import aircover from '../../img/aircover.PNG';
import './OneSpotList.css';

function OneSpotList() {
    const dispatch = useDispatch();
    const { spotId } = useParams();
    // console.log("spot Id: ", spotId)
    const spot = useSelector(state => state.spots.singleSpot)
    // console.log("OneSpotList spotObj: ", spot)
    // console.log("spot name:", spot.name)
    const [isLoaded, setIsLoaded] = useState(false);
    // const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        dispatch(listOneSpot(spotId)).then(() => setIsLoaded(true));
    }, [dispatch, spotId]);

    if (!spot) return null;

    return (
        <div className='one-spot-list-container'>
            {isLoaded && (
                <div className='one-spot-list'>
                    <div className='spot-title-and-image-section'>
                        <div className='spot-title-section' >
                            <h1 className='spot-title'>{spot.name}</h1>
                            <div className='spot-title-info'>
                                <div id='fafastar'>
                                    < i className="fa-solid fa-star" />
                                </div>
                                <div className='spot-title-detail'>{spot.avgStarRating ? spot.avgStarRating.toFixed(2) : 'New'}</div>
                                <div className='spot-title-detail'> · </div>
                                <div className='spot-title-detail'> {`${spot.numReviews} reviews`} </div>
                                <div className='spot-title-detail'> · </div>
                                <div className='spot-title-detail'>{`${spot.city}, ${spot.state}, ${spot.country}`}</div>
                            </div>
                        </div>
                        <div className='spot-image-section'>
                            <div className='spot-image-main-only'>
                                {!spot.SpotImages[1] && <img src={spot.SpotImages[0].url} alt='Spot preview image' />}
                            </div>
                            <div className='spot-image-main-left'>
                                <img src={spot.SpotImages[0].url} alt='Spot preview image' />
                            </div>
                            <div className='spot-image-middle'>
                                {spot.SpotImages[1] && (<img id="spot-img-2" src={spot.SpotImages[1].url} />)}
                                {spot.SpotImages[2] && (<img id="spot-img-3" src={spot.SpotImages[2].url} />)}
                            </div>
                            <div className='spot-image-right'>
                                {spot.SpotImages[3] && (<img id="spot-img-4" src={spot.SpotImages[3].url} />)}
                                {spot.SpotImages[4] && (<img id="spot-img-5" src={spot.SpotImages[4].url} />)}
                            </div>
                        </div>
                    </div>

                    <div className='spot-detail-and-booking-section'>
                        <div className='spot-detail-section-left'>
                            <h2 className='spot-owner-first-name'>{`Entire home hosted by ${spot.Owner.firstName}`}</h2>
                            <div className='spot-info-3secs'>
                                <div className='spot-info-1sec'>
                                    <img src={superhost} />
                                    <div className='spot-info-1sec-right'>
                                        <div className='spot-info-1sec-right1'>
                                            {`${spot.Owner.firstName} is a Superhost`}
                                        </div>
                                        <div className='spot-info-1sec-right2'>
                                            Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.
                                        </div>
                                    </div>
                                </div>
                                <div className='spot-info-1sec'>
                                    <img src={locationdrop} />
                                    <div className='spot-info-1sec-right'>
                                        <div className='spot-info-1sec-right1'>Great location</div>
                                        <div className='spot-info-1sec-right2'>100% of recent guests gave the location a 5-star rating.</div>
                                    </div>
                                </div>
                                <div className='spot-info-1sec2'>
                                    <img src={keylogo} />
                                    <div className='spot-info-1sec-right'>
                                        <div className='spot-info-1sec-right1'>Great check-in experience</div>
                                        <div className='spot-info-1sec-right2'>100% of recent guests gave the check-in process a 5-star rating.</div>
                                    </div>
                                </div>
                            </div>
                            <div className='aircover-sec'>
                                <img src={aircover} />
                                <div className='aircover-sec-note'>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</div>
                            </div>
                            <div className='spot-description'>{spot.description}</div>
                            <div className='spot-calendar-container'>
                                <h2 className='spot-calendar'>Check Availability</h2>
                                <ShowCalendar spotId={spotId} />
                            </div>

                        </div>
                        <div className='spot-booking-section-right'>
                            <div className='spot-booking-top'>
                                <div className='spot-booking-top-left'>
                                    <div className='booking-top-price'><span >{`$${spot.price} `}</span></div>
                                    <div className='booking-top-night'>  night</div>
                                </div>
                                <div className='spot-booking-top-right'>
                                    <div id='fafastar'>
                                        <i className="fa-solid fa-star" />
                                    </div>
                                    <div>{spot.avgStarRating ? spot.avgStarRating.toFixed(2) : 'New'}</div>
                                    <div id='dot'> · </div>
                                    <div className="booking-top-review"> {`${spot.numReviews} reviews`} </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='spot-review-section'>
                        <div className='spot-review-section-toprow'>
                            <div className='spot-review-section-top-left'>
                                <div id='fafastar'>
                                    <i className="fa-solid fa-star" />
                                </div>
                                <div>{spot.avgStarRating ? spot.avgStarRating.toFixed(2) : 'New'}</div>
                                <div id='dot'> · </div>
                                <div> {`${spot.numReviews} reviews`} </div>
                            </div>
                            <div className='spot-review-section-top-right' id='button-add-review'>
                                <AddNewReviewModal spot={spot} />
                            </div>
                        </div>
                        <div className='spot-reviews'>
                            <ListSpotReviews spot={spot} spotId={spot.id} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default OneSpotList;



// <div className='map'>
// <div class="mapouter">
//     <div class="gmap_canvas">
//         <iframe width="600" height="500" id="gmap_canvas" src={`https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
//         </iframe>
//         <a href="https://fmovies-online.net">fmovies</a>
//         {/* <style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}
//         </style> */}
//         <a href="https://www.embedgooglemap.net">copy google map</a>
//         {/* <style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style> */}
//     </div>
// </div>
// </div>
