import { csrfFetch } from './csrf';

//todo: define types
const GET_SPOT_REVIEWS = 'reviews/getSpotReviews';
const GET_USER_REVIEWS = 'reviews/getUserReviews';
const ADD_ONE_REVIEW = 'reviews/addOneReview';
const DELETE_ONE_REVIEW = 'reviews/deleteOneReview';


//todo: define action creators
//action: get spots reviews
const getSpotReviewsAction = (payload) => {
    return {
        type: GET_SPOT_REVIEWS,
        payload,
    }
}
//action: get user reviews
const getUserReviewsAction = (payload) => {
    return {
        type: GET_USER_REVIEWS,
        payload,
    }
}
//action: add one review
const addOneReviewAction = (payload) => {
    return {
        type: ADD_ONE_REVIEW,
        payload
    }
}
//action: delete one review
const deleteOneReviewAction = (reviewId) => {
    return {
        type: DELETE_ONE_REVIEW,
        reviewId
    }
}


//todo: thunks section
// thunk: get spot's reviews
export const listSpotReviewsThunk = (spotId) => async (dispatch) => {
    const response = await fetch(`/api/spots/${spotId}/reviews`);
    if (response.ok) {
        const data = await response.json();
        // console.log("store reviews thunk spot review data: ", data)
        dispatch(getSpotReviewsAction(data.Reviews));
        return data;
    }
};

// thunk: get user's reviews
export const listUserReviewsThunk = () => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/current`);
    if (response.ok) {
        const data = await response.json();
        // console.log("store reviews thunk user review data: ", data.Reviews)
        dispatch(getUserReviewsAction(data.Reviews));
        return data;
    }
};

// thunk: add one review for current spot
export const addReviewThunk = (spotId, review) => async dispatch => {
    try {
        const response = await csrfFetch(`/api/spots/${spotId}/reviews`, {
            method: 'POST',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(review)
        })

        if (response.ok) {
            const data = await response.json();
            // console.log("store reviews thunk add one review step1: ", data)
            dispatch(addOneReviewAction(data));
            return data;
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

// thunk: delete a review reviews
export const deleteReviewThunk = (reviewId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        dispatch(deleteOneReviewAction(reviewId));
        return response;
    }
};



//todo: reducer stuff
const initialState = { spot: {}, user: {} };

const reviewsReducer = (state = initialState, action) => {

    let newState;
    // console.log('action:', action)
    switch (action.type) {
        case GET_SPOT_REVIEWS:
            let spot = {};
            action.payload.forEach(review => { spot[review.id] = review });
            newState = { ...state };
            newState.spot = spot;
            // newState = { ...spot };
            // console.log("spot reviews newState", newState)
            return newState;

        case GET_USER_REVIEWS:
            let user = {};
            action.payload.forEach(review => { user[review.id] = review });
            newState = { ...state };
            newState.user = user;
            // newState = { ...spot };
            // console.log("user reviews newState", newState)
            return newState;

        case ADD_ONE_REVIEW:
            newState = { ...state, spot: { ...state.spot }, user: { ...state.user } };
            const addReview = { ...action.payload };
            newState.spot[action.payload.id] = addReview;
            newState.user[action.payload.id] = addReview;
            // console.log("spots reducer add one spot newState: ", newState)
            return newState;

        case DELETE_ONE_REVIEW:
            newState = { spot: { ...state.spot }, user: { ...state.user } };
            delete newState.spot[action.reviewId];
            delete newState.user[action.reviewId];
            // newState = { ...spot };
            console.log("user reviews newState", newState)
            return newState;

        default:
            return state;
    }
};

export default reviewsReducer;
