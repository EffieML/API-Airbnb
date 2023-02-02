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
        if (window.confirm('Do you want to delete this spot?')) {
            await dispatch(spotsActions.deleteSpot(spotId))
            // .then(() => history.push('/spots/current'))
        }
    }

    return (
        <div className='user-listing-page'>
            {isloaded && (
                <div>
                    <h1 className='user-listing-page-title'>Manage your listings </h1>
                    <div className='user-spots-create-button'>
                        <AddNewSpotModal />
                    </div>
                    <div className='user-all-listings'>
                        {spots.map(spot => (
                            <div key={spot.id} className='user-each-listing'>
                                <div className='listed-spot'>
                                    <Link to={`/spots/${spot.id}`}>
                                        <div className='listed-spot-image'>
                                            <img className='spot-image-size' src={spot.previewImage} alt='Spot preview image' />
                                        </div>
                                    </Link>
                                    <div className='listed-spot-info'>
                                        <div className='listed-spot-info-name'>
                                            {`${spot.name}`}
                                        </div>
                                        <div className='listed-spot-info-location'>
                                            {`${spot.city}, ${spot.state}, ${spot.country}`}
                                        </div>
                                        <div className='listed-spot-info-time'>{`Last updated at: ${spot.createdAt.slice(0, 10)}`}</div>
                                    </div>
                                </div>
                                <div className='listed-spot-edit-delete-button'>
                                    <EditSpotModal spot={spot} spotId={spot.id} />
                                    <button onClick={() => handleDelete(spot.id)}> Delete Listing </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )


}

export default UserListingPage;
