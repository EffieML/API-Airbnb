import { csrfFetch } from './csrf';

//todo: define types
const GET_ALL_SPOTS = 'spots/getAllSpots';
const GET_ONE_SPOT = 'spots/getOneSpot';
const ADD_ONE_SPOT = 'spots/addOneSpot';
const ADD_SPOT_IMAGE = 'spots/addSpotImage';


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
//action: add one spot
const addOneSpot = (payload) => {
    return {
        type: ADD_ONE_SPOT,
        payload
    }
}

//add image to spot
const addSpotImage = (spot, img) => {
    return {
        type: ADD_SPOT_IMAGE,
        payload: { spot, img }
    }
}

//todo: thunks section
// thunk: get all spots
export const listAllSpots = () => async (dispatch) => {
    const response = await fetch('/api/spots');
    if (response.ok) {
        const data = await response.json();
        console.log("store spots thunk spots data: ", data)
        dispatch(getAllSpots(data.Spots));
        return data;
    }
};
// thunk: get one spot
export const listOneSpot = (spotId) => async (dispatch) => {
    // console.log("store spots thunk spotId", spotId)
    const response = await csrfFetch(`/api/spots/${spotId}`);
    if (response.ok) {
        const singleSpot = await response.json();
        // console.log("store spots thunk data:", data)
        dispatch(getOneSpot(singleSpot));
        return response;
    }
};
// thunk: get all spots for current user
export const listUserSpots = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots/current');
    if (response.ok) {
        const data = await response.json();
        // console.log("store spots thunk user spots data: ", data)
        dispatch(getAllSpots(data.Spots));
        return response;
    }
};
// thunk: add one spot for current user
export const addSpot = (spot) => async dispatch => {
    try {

        const response = await csrfFetch('/api/spots', {
            method: 'POST',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(spot)
        })

        if (response.ok) {
            const data = await response.json();
            console.log("store spots thunk add one spot step1: ", data)
            //data is obj list {address:.., lat: ..., ...}
            //do actioin addOneSpot to create newSpot which will generate data.id
            const newSpot = dispatch(addOneSpot(data));
            console.log("store spots thunk add one spot step2: ", newSpot)
            const { url } = spot;
            const imageRes = await csrfFetch(`/api/spots/${data.id}/images`, {
                method: 'POST',
                body: JSON.stringify(
                    {
                        url,
                        preview: true
                    }
                )
            });
            if (imageRes.ok) {
                const imageData = await imageRes.json();
                console.log("imgdata and spot data", data, imageData);
                dispatch(addSpotImage(data, imageData));
                return data;
            }

        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}


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
const initialState = { allSpots: {}, singleSpot: {} };

const spotsReducer = (state = initialState, action) => {

    let newState = {};
    console.log('action:', action)
    switch (action.type) {
        case GET_ALL_SPOTS:
            let allSpots = {};
            action.spots.map(spot => { allSpots[spot.id] = spot });
            newState = { ...state };
            newState.allSpots = allSpots;
            // console.log("newState", newState)
            return newState;

        case GET_ONE_SPOT:
            newState = { ...state };
            let singleSpot = { ...action.spot }
            // console.log("action spot", action.spot)  single object
            newState.singleSpot = singleSpot;
            return newState;

        case ADD_ONE_SPOT:
            newState = { ...state, allSpots: { ...state.allSpots }, singleSpot: {} };
            const addSpot = { ...action.payload };
            newState.allSpots[action.payload.id] = addSpot;
            newState.singleSpot = addSpot;
            // console.log("spots reducer add one spot newState: ", newState)
            return newState;

        case ADD_SPOT_IMAGE:
            newState = {
                ...state,
                singleSpot: {
                    ...action.payload.spot,
                    SpotImages: [action.payload.img]
                }
            }
            // console.log("addspotimage reducer:", newState)
            //{allspots{}, singlespot{id,address, SpotImages{1:xxx, 2:xxx}}}
            return newState


        default:
            return state;
    }
};

export default spotsReducer;