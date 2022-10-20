import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useSelector } from 'react-redux';
import LoginForm from '../LoginFormModal/LoginForm.js';
import AddNewReviewForm from './AddNewReviewForm';

function AddNewReviewModal({ spot }) {
    const [showModal, setShowModal] = useState(false);

    const currUser = useSelector(state => state.session.user)
    if (!currUser) return (<LoginForm />)

    return (
        <>
            <button className='add-review-button' onClick={() => setShowModal(true)}>Add Your Review</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    < AddNewReviewForm spot={spot} setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default AddNewReviewModal;
