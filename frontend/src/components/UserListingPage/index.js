import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { listUserSpots } from '../../store/spots';
import './UserListingPage.css';

function UserListingPage() {
    const dispatch = useDispatch();
    const spots = Object.values(useSelector(state => state.spots.allSpots))
    // console.log("UserListingpage spots: ", spots)
    //spots is an array obj lists
    const currUser = useSelector(state => state.session.user)
    // console.log('UserListingpage currUserid: ', currUser.id)
    const [isloaded, setIsLoaded] = useState(false);


    useEffect(() => {
        dispatch(listUserSpots()).then(() => setIsLoaded(true));
    }, [dispatch, currUser.id]);

    if (spots.length == 0) return null;

    return (
        <div className='user-listing-page'>
            {isloaded && (
                <div>
                    <h1 className='user-listing-page-title'>Manage your listings </h1>
                    <button> Create New Listing </button>
                    <div className='user-all-listings'>
                        {spots.map(spot => (
                            <Link key={spot.id} to={`/spots/${spot.id}`}>
                                <div className='listed-spot'>
                                    <div className='listed-spot-image'>
                                        <img src={spot.previewImage} alt='Spot preview image' />
                                    </div>
                                    <div className='listed-spot-info'>
                                        <div>
                                            {`${spot.name}`}
                                        </div>
                                        <div>
                                            {`${spot.city}, ${spot.state}, ${spot.country}`}
                                        </div>
                                    </div>
                                    <div className='listed-spot-edit-delete-button'>
                                        <button> Edit Listing </button>
                                        <button> Delete Listing </button>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )


}

export default UserListingPage;
