import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { editOneReviewThunk } from '../../store/reviews';
import { listUserReviewsThunk } from '../../store/reviews';
import '../LoginFormModal/LoginForm.css';

function EditReviewForm({ rev, reviewId, setShowModal, spotName }) {
    const dispatch = useDispatch();
    // const history = useHistory();

    const [review, setReview] = useState(rev ? rev.review : '');
    const [stars, setStars] = useState(rev ? rev.stars : 5);
    const [errors, setErrors] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        const updateReview = {
            review,
            stars,
        }

        const editedReview = await dispatch(editOneReviewThunk(updateReview, reviewId))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });

        if (editedReview) {
            setErrors([]);
            setShowModal(false);
            await dispatch(listUserReviewsThunk())
        }
    };

    return (
        <div className="form">
            <p className='form-title'>Update your review</p>
            <p className='form-sub-title'>for {spotName}</p>
            <form onSubmit={handleSubmit}>
                <p className='form-welcome'>Thanks for sharing with us!</p>
                <ul className="form-errors">
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div className="form-elem">
                    <label>
                        Rating
                        <input
                            type="integer"
                            value={stars}
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

export default EditReviewForm;
