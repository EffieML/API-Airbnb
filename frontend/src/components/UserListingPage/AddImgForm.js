import React, { useState } from 'react'
// import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
// import { addReviewThunk, listSpotReviewsThunk } from "../../store/reviews";
import { createSpotImageThunk } from '../../store/spotImg';
import { listOneSpot } from "../../store/spots";
import '../LoginFormModal/LoginForm.css';

function AddImgForm({ spot, spotId, setShowModal }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const [url, setUrl] = useState("");
    const [errors, setErrors] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newImg = {
            url
        }

        const addedImg = await dispatch(createSpotImageThunk(newImg, spotId))
            .then(() => dispatch(listOneSpot(spotId)))
            // .then(() => dispatch(listSpotReviewsThunk(spot.id)))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);


                if (res.status === 403) {
                    setErrors(["User already has a review for this spot"])
                }
                if (res.status === 404) {
                    setErrors(["Spot couldn't be found"]);
                }
                if (res.status === 400) {
                    setErrors(["Stars must be an integer from 1 to 5"]);
                }
                // console.log("Ming review err: ", errors)
            });

        if (addedImg) {
            setErrors([]);
            setShowModal(false)
            // history.push(`/spots/${spot.id}`)
        }
    };

    return (
        <div className="form">
            <p className='form-title'>Upload Photos</p>
            <form onSubmit={handleSubmit}>
                <p className='form-welcome'>Show travelers what your space looks like!</p>
                {/* <p className='form-sub-title'>for {spot.name}</p> */}
                <ul className="form-errors">
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div className="form-elem">
                    <label>
                        Photo url
                        <input
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            required
                        />
                    </label>
                </div>

                <div className='form-button-container'>
                    <button className="form-button" type="submit">Submit</button>
                </div>
            </form >
        </div >
    );
}

export default AddImgForm;
