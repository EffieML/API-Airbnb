import React, { useState } from 'react'
// import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addReviewThunk } from "../../store/reviews"

function AddNewReviewForm({ spot, setShowModal }) {
    console.log("AddNewReviewForm:", spot)
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
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);

                if (res.status === 403) {
                    // console.log("error 403:", errors)
                    setErrors(["User already has a review for this spot"])
                }
                if (res.status === 404) {
                    // console.log("error 404:", errors)
                    setErrors(["Spot couldn't be found"]);
                }
                if (res.status === 400) {
                    // console.log("error 400:", errors)
                    setErrors(["Input is not valid"]);
                }
            });
        // console.log("AddNewReviewForm added new review,", spot.id);

        if (addedReview) {
            setErrors([]);
            setShowModal(false)
            // history.push(`/spots/${spot.id}`)
        }
    };

    return (
        <div className="add-new-review-form">
            <p className='add-new-review-title'>Create new review</p>
            <p className='add-new-review-title'>for {spot.name}</p>
            <form onSubmit={handleSubmit}>
                <p className='add-new-review-welcome'>Thanks for sharing with us!</p>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div className="add-new-review-elem">
                    <label>
                        Rating
                        <input
                            type="integer"
                            // placeholder="Address"
                            value={stars}
                            onChange={(e) => setStars(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="add-new-review-elem">
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

                <button className="add-new-review-button" type="submit">Submit</button>
            </form >
        </div >
    );
}

export default AddNewReviewForm;
