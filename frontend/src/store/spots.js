import { csrfFetch } from './csrf';

//todo: define types
const GET_ALL_SPOTS = 'spots/getAllSpots';
const GET_ONE_SPOT = 'spots/getOneSpot';



//todo: define action creators
//action: get all spots
const getAllSpots = (spots) => {
    return {
        type: GET_ALL_SPOTS,
        spots,
    }
}
//action: get one spot
const getOneSpot = (spot) => {
    return {
        type: GET_ONE_SPOT,
        spot,
    }
}



//todo: thunks section
// thunk: get all spots
export const listAllSpots = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots');
    const data = await response.json();
    // console.log("store spots thunk spots data: ", data)
    dispatch(getAllSpots(data.Spots));
    return response;
};
// thunk: get one spot
export const listOneSpot = (spotId) => async (dispatch) => {
    // console.log("store spots thunk spotId", spotId)
    const response = await csrfFetch(`/api/spots/${spotId}`);
    const data = await response.json();
    // console.log("store spots thunk data:", data)
    dispatch(getOneSpot(data));
    return response;
};



// load inital spots and convert to object lsit
// function normalizeArray(dataArray) {
//     if (!(dataArray instanceof Array)) throw new Error('Normalize problem: data invalid')
//     const obj = {}
//     dataArray.forEach(el => {
//         obj[el.id] = el
//     })
//     return obj
// }


//todo: reducer stuff
const initialState = {};

const spotsReducer = (state = initialState, action) => {
    let newState = { ...state };

    switch (action.type) {
        case GET_ALL_SPOTS:
            action.spots.map(spot => newState[spot.id] = spot);
            return newState;
        case GET_ONE_SPOT:
            const spot = action.spot;
            // newState[action.spot.spotId] = action.spot;
            newState = { ...state, ...action.spot }
            return newState;

        default:
            return state;
    }
};

export default spotsReducer;
