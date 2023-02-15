import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useSelector } from 'react-redux';
import LoginForm from '../LoginFormModal/LoginForm.js';
import AddImgForm from './AddImgForm';
import './UserListingPage.css';

function AddImgModal({ spot, spotId }) {
    const [showModal, setShowModal] = useState(false);

    const currUser = useSelector(state => state.session.user)
    // if (!currUser) return (<LoginForm />)

    return (
        <>
            <button className='listed-spot-add-img-button' onClick={() => setShowModal(true)}>Upload Photo</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    {currUser ? < AddImgForm spot={spot} spotId={spotId} setShowModal={setShowModal} />
                        : <LoginForm onClose={() => setShowModal(false)} />}
                </Modal>
            )}
        </>
    );
}

export default AddImgModal;
