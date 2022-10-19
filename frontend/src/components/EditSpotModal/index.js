import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useSelector } from 'react-redux';
import EditSpotForm from './EditSpotForm';

function EditSpotModal({ spot, spotId }) {
    const [showModal, setShowModal] = useState(false);
    console.log('edit spot form details', spot)
    console.log(' edit spotId form details', spotId)

    const currUser = useSelector(state => state.session.user)
    if (!currUser) { return null }

    return (
        <>
            <button onClick={() => setShowModal(true)}>Edit Listing</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} >
                    < EditSpotForm spot={spot} spotId={spotId} setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default EditSpotModal;
