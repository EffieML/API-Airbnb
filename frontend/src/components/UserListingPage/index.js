import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { useHistory } from "react-router";
import { listUserSpots } from '../../store/spots';
import AddNewSpotModal from '../AddNewSpotModal';
import EditSpotModal from '../EditSpotModal';
import * as spotsActions from "../../store/spots";
import './UserListingPage.css';

function UserListingPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const spots = Object.values(useSelector(state => state.spots.allSpots))
    // console.log("UserListingpage spots: ", spots)
    //spots is an array obj lists
    const currUser = useSelector(state => state.session.user)
    // console.log('UserListingpage currUserid: ', currUser.id)
    const [isloaded, setIsLoaded] = useState(false);


    useEffect(() => {
        dispatch(listUserSpots()).then(() => setIsLoaded(true));
    }, [dispatch]);


    // if user is not logged in, need to redirect to main page
    if (!currUser) return <Redirect to='/' />

    //if user don't have post spots, showing empty message
    if (spots.length == 0) return (<h2>No listings yet.</h2>);




    const handleDelete = async (spotId) => {
        await dispatch(spotsActions.deleteSpot(spotId))
            .then(() => history.replace('/spots/current'))
    }

    if (spots.length == 0) return null;

    return (
        <div className='user-listing-page'>
            {isloaded && (
                <div>
                    <h1 className='user-listing-page-title'>Manage your listings </h1>
                    <div>
                        <AddNewSpotModal />
                    </div>
                    <div className='user-all-listings'>
                        {spots.map(spot => (
                            <>
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

                                    </div>
                                </Link>
                                <div className='listed-spot-edit-delete-button'>
                                    <div>
                                        <EditSpotModal spot={spot} spotId={spot.id} />
                                        <button onClick={() => handleDelete(spot.id)}> Delete Listing </button>
                                    </div>
                                    <button> Delete Listing </button>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )


}

export default UserListingPage;
