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
// thunk: get spots reviews
export const listSpotReviewsThunk = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`);
    if (response.ok) {
        const data = await response.json();
        console.log("store reviews thunk spot review data: ", data)
        dispatch(getSpotReviewsAction(data.Reviews));
        return data;
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
            console.log("newState", newState)
            return newState;

        default:
            return state;
    }
};

export default reviewsReducer;
