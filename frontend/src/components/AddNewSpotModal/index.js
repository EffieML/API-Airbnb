import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useSelector } from 'react-redux';
import AddNewSpotForm from './AddNewSpotForm';

function AddNewSpotModal() {
    const [showModal, setShowModal] = useState(false);

    const currUser = useSelector(state => state.session.user)
    if (!currUser) { return null }

    return (
        <>
            <button onClick={() => setShowModal(true)}>Create New Listing</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    < AddNewSpotForm />
                </Modal>
            )}
        </>
    );
}

export default AddNewSpotModal;
