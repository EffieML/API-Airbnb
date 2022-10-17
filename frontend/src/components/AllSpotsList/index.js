import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { listAllSpots } from '../../store/spots';
import './AllSpotsList.css';

function AllSpotsList() {
    const dispatch = useDispatch();
    const spotsObj = useSelector(state => state.spots)
    console.log("AllSpotsList spotsObj: ", spotsObj)
    const spots = Object.values(spotsObj);
    // console.log("AllSpotsList spots: ", spots)

    useEffect(() => {
        dispatch(listAllSpots());
    }, [dispatch]);

    return (
        <div className='all-spots-list'>
            {spots && (
                spots.map(spot => (
                    // <Link key={spot.id} to={`/spots/${spot.id}`}>
                    <div key={spot.id} className='spot-card'>
                        <div >
                            <img src={spot.previewImage} alt='Spot preview image' />
                        </div>
                        <div className='spot-info'>
                            <div>
                                {`${spot.city}, ${spot.state}`}
                            </div>
                            <div >
                                <span>${spot.price} </span>night
                            </div>
                            <div>
                                rating?
                            </div>
                        </div>
                    </div>
                    // </Link>
                ))
            )}
        </div>
    )
}

export default AllSpotsList;
