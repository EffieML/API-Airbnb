import React, { useState } from 'react'
// import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addReviewThunk, listSpotReviewsThunk } from "../../store/reviews";
import { listOneSpot } from "../../store/spots";
import '../LoginFormModal/LoginForm.css';

function AddNewReviewForm({ spot, setShowModal, reviewId }) {
    // console.log("AddNewReviewForm:", spot)
    const dispatch = useDispatch();
    const history = useHistory();


    const [review, setReview] = useState('');
    const [stars, setStars] = useState(5);
    const [errors, setErrors] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newReview = {
            review,
            stars,
        }

        const addedReview = await dispatch(addReviewThunk(spot.id, newReview))
            .then(() => dispatch(listOneSpot(spot.id)))
            .then(() => dispatch(listSpotReviewsThunk(spot.id)))
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

        if (addedReview) {
            setErrors([]);
            setShowModal(false)
            // history.push(`/spots/${spot.id}`)
        }
    };

    return (
        <div className="form">
            <p className='form-title'>Create new review</p>
            <p className='form-sub-title'>for {spot.name}</p>
            <form onSubmit={handleSubmit}>
                <p className='form-welcome'>Thanks for sharing with us!</p>
                <ul className="form-errors">
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div className="form-elem">
                    <label>
                        Rating
                        <input
                            type="number"
                            // placeholder="Address"
                            value={stars}
                            min="1"
                            max="5"
                            onChange={(e) => setStars(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="form-elem">
                    <label>
                        Review
                        <input
                            type="text"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
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

export default AddNewReviewForm;
