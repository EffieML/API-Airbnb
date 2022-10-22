import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useSelector } from 'react-redux';
import AddNewSpotForm from './AddNewSpotForm';

function AddNewSpotModal() {
    const [showModal, setShowModal] = useState(false);

    const currUser = useSelector(state => state.session.user)
    if (!currUser) { return null }

    return (
        <div className='user-spots-create-button'>
            <button onClick={() => setShowModal(true)}>Create New Listing</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    < AddNewSpotForm />
                </Modal>
            )}
        </div>
    );
}

export default AddNewSpotModal;
