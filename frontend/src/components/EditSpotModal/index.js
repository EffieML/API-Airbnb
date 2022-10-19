import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useSelector } from 'react-redux';
import EditSpotForm from './EditSpotForm';

function EditSpotModal() {
    const [showModal, setShowModal] = useState(false);

    const currUser = useSelector(state => state.session.user)
    if (!currUser) { return null }

    return (
        <>
            <button onClick={() => setShowModal(true)}>Edit Listing</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    < EditSpotForm />
                </Modal>
            )}
        </>
    );
}

export default EditSpotModal;
