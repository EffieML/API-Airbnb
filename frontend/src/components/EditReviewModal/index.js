import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useSelector } from 'react-redux';
import EditReviewForm from './EditReviewForm';

function EditReviewModal({ review, reviewId, spotName }) {
    const [showModal, setShowModal] = useState(false);

    const currUser = useSelector(state => state.session.user)
    if (!currUser) { return null }

    return (
        <>
            <button onClick={() => setShowModal(true)}>Edit Review</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} >
                    < EditReviewForm rev={review} reviewId={reviewId} setShowModal={setShowModal} spotName={spotName} />
                </Modal>
            )}
        </>
    );
}

export default EditReviewModal;
