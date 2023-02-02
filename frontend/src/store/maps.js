import { csrfFetch } from './csrf';

//todo: define types
const LOAD_API_KEY = 'maps/LOAD_API_KEY';

//todo: define action creators
const loadApiKey = (key) => ({
    type: LOAD_API_KEY,
    payload: key,
});

//todo: thunks section
export const getKey = () => async (dispatch) => {
    const res = await csrfFetch('/api/maps/key', {
        method: 'POST',
    });
    const data = await res.json();
    dispatch(loadApiKey(data.googleMapsAPIKey));
};


//todo: reducer stuff
const initialState = { key: null };

const mapsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_API_KEY:
            return { key: action.payload };
        default:
            return state;
    }
};

export default mapsReducer;
