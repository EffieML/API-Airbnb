import { csrfFetch } from './csrf';

//todo: define types ----------------------------------------------------------
// const GET_SPOT_IMAGES = 'spotimgs/getSpotImages';
const CREATE_SPOT_IMAGE = 'spotimgs/createSpotImage';
const DELETE_SPOT_IMAGE = 'spotimgs/deleteSpotImage';

//todo: define action creators ------------------------------------------------
// //action: get spot images
// const getSpotImagesAction = (spotimgs) => {
//     return {
//         type: GET_SPOT_IMAGES,
//         spotimgs,
//     }
// }

//action: create spot image
const createSpotImageAction = (spotimg) => {
    return {
        type: CREATE_SPOT_IMAGE,
        spotimg,
    }
}

//action: delete spot image
const deleteSpotImageAction = (spotimgId) => {
    return {
        type: DELETE_SPOT_IMAGE,
        spotimgId
    }
}


//todo: thunks section -------------------------------------------------------
// // thunk: get spot images
// export const getSpotImagesThunk = (spotId) => async (dispatch) => {
//     const response = await fetch(`/api/spots/${spotId}/SpotImgs`);
//     if (response.ok) {
//         const data = await response.json();
//         dispatch(getSpotImagesAction(data.productimgs));
//         return data;
//     }
// };

// thunk: create product img
export const createSpotImageThunk = (spotimg, spotId) => async (dispatch) => {
    try {
        const { url } = spotimg;
        const response = await csrfFetch(`/api/spots/${spotId}/images`, {
            method: 'POST',
            body: JSON.stringify(
                {
                    url,
                }
            )
        })
        if (response.ok) {
            const data = await response.json();
            await dispatch(createSpotImageAction(data));
            return data;
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}


// export const addSpotImage = (spotId, newImage) => async (dispatch) => {
//     const { url } = newImage;
//     const response = await csrfFetch(`/api/spots/${spotId}/images`, {
//         method: "POST",
//         body: JSON.stringify({
//             url
//         }),
//     });
//     const data = await response.json();
//     dispatch(createImages(data));
//     return response;
// };

// thunk: delete product img
export const deleteSpotImageThunk = (imageId) => async (dispatch) => {
    try {
        const response = await csrfFetch(`/api/spot-images/${imageId}`, {
            method: 'DELETE',
        })
        if (response.ok) {
            dispatch(deleteSpotImageAction(imageId));
            return response;
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

// export const removeImage = (id) => async (dispatch) => {
//     const response = await csrfFetch(`/api/images/${id}`, {
//         method: 'DELETE',
//     });
//     dispatch(deleteImage(id));
//     return response;
// };


//todo: reducer stuff --------------------------------------------------------
const initialState = { SpotAllimgs: {}, SpotOneimg: {} };

const spotimgsReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        // case GET_PRODUCT_IMAGES:
        //     let ProductAllimgs = {};
        //     action.productimgs.forEach(productimg => { ProductAllimgs[productimg.id] = productimg });
        //     newState = { ...state };
        //     newState.ProductAllimgs = ProductAllimgs;
        //     return newState;

        case CREATE_SPOT_IMAGE:
            newState = { ...state, SpotAllimgs: { ...state.SpotAllimgs }, SpotOneimg: {} };
            const newSpotimg = { ...action.spotimg };
            newState.SpotAllimgs[action.spotimg.id] = newSpotimg;
            newState.SpotOneimg = newSpotimg;
            // console.log("reviews reducer add one review newState: ", newState)
            return newState;

        case DELETE_SPOT_IMAGE:
            newState = { SpotAllimgs: { ...state.SpotAllimgs }, SpotOneimg: { ...state.SpotOneimg } };
            delete newState.SpotAllimgs[action.imageId];
            if (action.imageId === newState.SpotOneimg.id) { newState.SpotOneimg = {} }
            return newState;

        default:
            return state;
    }
}

export default spotimgsReducer;
