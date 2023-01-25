import { csrfFetch } from './csrf';

//todo: define types ----------------------------------------------------------
const CREATE_SPOT_BOOKING = 'bookings/createSpotBooking';
const GET_SPOT_ALL_BOOKINGS = 'bookings/getSpotAllBookings';
const GET_USER_ALL_BOOKINGS = 'bookings/getUserAllBookings';
const EDIT_USER_BOOKING = 'bookings/editUserBooking';
const DELETE_ONE_BOOKING = 'bookings/deleteOneBooking';


//todo: define action creators ------------------------------------------------
//action: create spot booking
const createSpotBookingAction = (booking) => {
    return {
        type: CREATE_SPOT_BOOKING,
        booking,
    }
}

//action: get spot all bookings
const getSpotAllBookingsAction = (bookings) => {
    return {
        type: GET_SPOT_ALL_BOOKINGS,
        bookings,
    }
}

//action: get user all bookings
const getUserAllBookingsAction = (bookings) => {
    return {
        type: GET_USER_ALL_BOOKINGS,
        bookings,
    }
}

//action: edit user booking
const editUserBookingAction = (booking) => {
    return {
        type: EDIT_USER_BOOKING,
        booking,
    }
}

//action: delete one booking by id
const deleteOneBookingAction = (id) => {
    return {
        type: DELETE_ONE_BOOKING,
        id,
    }
}


//todo: thunks section -------------------------------------------------------
// thunk: create spot booking
export const createSpotBookingThunk = (booking) => async (dispatch) => {
    try {
        const response = await csrfFetch(`/api/spots/${spotId}/bookings`, {
            method: 'POST',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(booking),
        })
        if (response.ok) {
            const data = await response.json();
            await dispatch(createSpotBookingAction(data));
            return data;
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

// thunk: get spot all bookings
export const getSpotAllBookingsThunk = () => async (dispatch) => {
    const response = await fetch(`/api/spots/${spotId}/bookings`);
    if (response.ok) {
        const data = await response.json();
        dispatch(getSpotAllBookingsAction(data.Bookings));
        return data;
    }
};

// thunk: get user all bookings
export const getUserAllBookingsThunk = () => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings/current`);
    if (response.ok) {
        const data = await response.json();
        dispatch(getUserAllBookingsAction(data.Bookings));
        return data;
    }
};

// thunk: edit one booking for current user
export const editUserBookingThunk = (booking, bookingId) => async dispatch => {
    try {
        const response = await csrfFetch(`/api/bookings/${bookingId}`, {
            method: 'PUT',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(booking)
        })

        if (response.ok) {
            const data = await response.json();
            dispatch(editUserBookingAction(data));
            return data
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

// thunk: delete one booking for current user
export const deleteOneBookingThunk = (bookingId) => async dispatch => {
    try {
        const response = await csrfFetch(`/api/bookings/${bookingId}`, {
            method: 'DELETE',
        })
        if (response.ok) {
            dispatch(deleteOneBookingAction(bookingId));
            return response;
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}


//todo: reducer stuff
const initialState = { allBookings: {}, singleBooking: {} };

const bookingsReducer = (state = initialState, action) => {

}
