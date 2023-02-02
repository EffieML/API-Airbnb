import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react';
import { searchSpotsThunk } from '../../../store/spots';
import './SpotsBySearch.css'


function SpotsBySearch() {

    const dispatch = useDispatch();
    const { keyword } = useParams();
    const spots = useSelector(state => Object.values(state.spots?.searchSpots));
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        dispatch(searchSpotsThunk(keyword))
            .then(() => setIsLoaded(true));
    }, [dispatch, keyword]);

    // if no spots, checkout other places
    if (spots.length == 0) return null;

    // const avgRating = (reviewsArr) => {
    //     if (reviewsArr?.length) {
    //         let totalRate = 0;
    //         for (let i = 0; i < reviewsArr.length; i++) {
    //             let review = reviewsArr[i];
    //             totalRate += review.stars;
    //         }
    //         return Number((totalRate / reviewsArr.length).toFixed(1))
    //     }
    //     return 0;
    // }

    return (
        <>
            {/* {isLoaded ? (<> */}
            {spots.length > 0 ? (
                spots.map(spot => (
                    <NavLink key={spot.id} to={`/spots/${spot.id}`}>
                        <div className='spot-card'>
                            <div className='spot-image'>
                                <img className='spot-image-size' src={spot.previewImage} alt='Spot preview image' />
                            </div>
                            <div className='spot-info'>
                                <div className='spot-info-1'>
                                    <div className='spot-info-city'>
                                        {`${spot.city}, ${spot.state}`}
                                    </div>
                                    <div className='spot-title-info'>
                                        <span id='fafastar'>
                                            <i className="fa-solid fa-star" />
                                        </span>
                                        <span>{spot.avgRating ? spot.avgRating.toFixed(2) : 'New'}</span>
                                    </div>
                                </div>

                                <div className='spot-info-2'>
                                    <span>${spot.price} </span>night
                                </div>

                            </div>
                        </div>
                    </NavLink>
                ))
            ) : <>no spots</>}
            {/* </>

            ) : <LoadingPage />
            } */}
        </>
    )
}

export default SpotsBySearch;
