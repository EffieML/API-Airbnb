import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { useHistory } from "react-router";
import { getUserAllBookingsThunk } from '../../../store/bookings.js';
import { deleteOneBookingThunk } from '../../../store/bookings.js';
import './UserBookingsPage.css';

function UserBookingsPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const bookings = Object.values(useSelector(state => state.bookings.userBookings))
    // console.log("UserBookingsPage bookings: ", bookings)
    // //bookings is an array obj lists
    const currUser = useSelector(state => state.session.user)
    // // console.log('UserListingpage currUserid: ', currUser.id)
    const [isloaded, setIsLoaded] = useState(false);


    useEffect(() => {
        dispatch(getUserAllBookingsThunk()).then(() => setIsLoaded(true));
    }, [dispatch]);


    // // if user is not logged in, need to redirect to main page
    if (!currUser) return <Redirect to='/' />

    // //if user don't have post spots, showing empty message
    if (bookings.length == 0) return (<h2>No Trips yet.</h2>);

    // const handleDelete = async (spotId) => {
    //     if (window.confirm('Do you want to delete this spot?')) {
    //         await dispatch(spotsActions.deleteSpot(spotId))
    //         // .then(() => history.push('/spots/current'))
    //     }
    // }

    return (
        <div className='user-listing-page'>
            {isloaded && (
                <div>
                    <h1 className='user-listing-page-title'>Trips </h1>
                    {/* <div className='user-spots-create-button'>
                    <AddNewSpotModal />
                </div> */}
                    <div className='user-all-listings'>
                        {bookings.map(booking => (
                            <div key={booking.id} className='user-each-listing'>
                                <div className='listed-spot'>
                                    {/* <Link to={`/spots/${spot.id}`}>
                                    <div className='listed-spot-image'>
                                        <img className='spot-image-size' src={spot.previewImage} alt='Spot preview image' />
                                    </div>
                                </Link> */}
                                    <div className='listed-spot-info'>
                                        <div className='listed-spot-info-name'>
                                            {`${booking.spotId}`}
                                        </div>
                                        {/* <div className='listed-reviews-review'></div>
                                    <div className='listed-spot-info-location'>
                                        {`${spot.city}, ${spot.state}, ${spot.country}`}
                                    </div>
                                    <div className='listed-spot-info-time'>{`Last updated at: ${spot.createdAt.slice(0, 10)}`}</div> */}
                                    </div>
                                </div>
                                {/* <div className='listed-spot-edit-delete-button'>
                                <EditSpotModal spot={spot} spotId={spot.id} />
                                <button onClick={() => handleDelete(spot.id)}> Delete Listing </button>
                            </div> */}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )


}

export default UserBookingsPage;
