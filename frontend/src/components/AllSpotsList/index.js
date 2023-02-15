import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Reach, { useEffect } from 'react';
import { listAllSpots } from '../../store/spots';
import mapbutton from '../../img/mapbutton.PNG';
import './AllSpotsList.css';

function AllSpotsList() {
    const dispatch = useDispatch();
    const spots = Object.values(useSelector(state => state.spots.allSpots))
    // console.log("AllSpotsList spots: ", spots)

    useEffect(() => {
        dispatch(listAllSpots());
    }, [dispatch]);

    // if statement locate below useEffect
    if (spots.length == 0) return null;

    return (
        <div className='all-spots-container'>
            <div className='all-spots-list'>
                {spots && (
                    spots.map(spot => (
                        <NavLink key={spot.id} to={`/spots/${spot.id}`}>
                            <div className='spot-card'>
                                <div className='spot-image'>
                                    <img className='spot-image-size' src={spot.previewImage} onError={e => e.target.src = 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/imagesNotAvailable.png'} />
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
                )}
            </div>
            <NavLink to={'/spotsmap'} className='all-spots-map-container'>
                <div>Show map</div>
                <img src={mapbutton} />
            </NavLink>
        </div>
    )
}

export default AllSpotsList;
