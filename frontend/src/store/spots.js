import { csrfFetch } from './csrf';

//todo: define types
const GET_ALL_SPOTS = 'spots/getAllSpots';



//todo: define action creators
//action: get all spots
const getAllSpots = (spots) => {
    return {
        type: GET_ALL_SPOTS,
        spots,
    }
}



//todo: thunks section
// thunk: get all spots
export const listAllSpots = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots');
    const data = await response.json();
    // console.log("store spots data: ", spots)
    dispatch(getAllSpots(data.Spots));
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

        default:
            return state;
    }
};

export default spotsReducer;
