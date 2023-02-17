import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createSpotBookingThunk } from "../../../store/bookings";
import { Modal } from '../../../context/Modal';
import LoginForm from '../../LoginFormModal/LoginForm'
import './CreateSpotBooking.css'

function CreateSpotBooking({ spot }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { spotId } = useParams();
    const currUser = useSelector(state => state.session.user)

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [hasSubmitted, setHasSubmitted] = useState("");
    const [errors, setErrors] = useState([]);
    const [showLoginModal, setShowLoginModal] = useState(false);

    let calNights = parseInt((new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 3600 * 24))
    let cleanFee = 100;
    let serviceFee = 10;

    useEffect(() => {
        if (currUser) setShowLoginModal(false);
    }, [currUser]);

    const totalPrice = (spotPrice) => {
        console.log('total price------------', parseInt((spot.price + 10) * (calNights < 0 || isNaN(calNights) ? 0 : calNights) + 100))
        console.log('total price2------------', parseInt((spot.price + serviceFee) * (calNights < 0 || isNaN(calNights) ? 0 : calNights) + cleanFee))
        return parseInt((spot.price + serviceFee) * (calNights < 0 || isNaN(calNights) ? 0 : calNights) + cleanFee)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (currUser) {
            const newBooking = {
                spotId,
                startDate,
                endDate
            }
            setHasSubmitted(true);
            const addedBooking = await dispatch(createSpotBookingThunk(newBooking))
                .catch(
                    async (res) => {
                        const data = await res.json();
                        // console.log('before res.json error--------------', data.errors)
                        if (data && data.errors) {
                            setErrors(data.errors);
                            // console.log('before res.json error--------------', errors)
                        }
                    }
                );
            if (addedBooking) {
                setErrors([]);
                history.push(`/bookings/current`)
            }
        } else {
            setShowLoginModal(true);
        };
    };

    return (
        <>
            <div className="booking-form">
                <form onSubmit={handleSubmit}>

                    {hasSubmitted && (errors?.length || errors?.endDate || errors?.startDate) &&
                        <div>
                            <div className="booking-form-errors">
                                Slots not available, please check availability first.
                            </div>
                        </div>}
                    <div className="booking-form-check-in-out">
                        <div className="booking-form-check-in">
                            <label>
                                CHECK-IN
                            </label>
                            <input
                                type="date"
                                placeholder="Add date"
                                className="booking-form-checkin-input"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                min={`${new Date().toLocaleDateString('en-ca')}`}
                                max={`${new Date().getFullYear() + 2}-12-31`}
                                required
                            />
                        </div>
                        <div className="booking-form-check-out">
                            <label>
                                CHECKOUT
                            </label>
                            <input
                                type="date"
                                placeholder="Add date"
                                className="booking-form-checkin-input"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                min={`${new Date(new Date(startDate).getTime() + (1000 * 3600 * 48)).toLocaleDateString('en-ca')}`}
                                max={`${new Date().getFullYear() + 2}-12-31`}
                                required
                            />
                        </div>
                    </div>
                    <div className='booking-form-button-container'>
                        <button className="booking-form-button" type="submit">Reserve</button>
                    </div>
                </form >
                <div className="booking-form-nocharge-container">
                    <div className="booking-form-nocharge">
                        You won't be charged yet
                    </div>
                </div>
                <div className='booking-form-bttm-r1'>
                    <div className='booking-form-bttm-left'>{`$${spot.price}`} x {calNights < 0 || isNaN(calNights) ? 0 : calNights} nights</div>
                    <div className='booking-form-bttm-right'>{`$${spot.price * (calNights < 0 || isNaN(calNights) ? 0 : calNights)}`}</div>
                </div>
                <div className='booking-form-bttm-r1'>
                    <div className='booking-form-bttm-left'>Cleaning fee</div>
                    <div className='booking-form-bttm-right'>{`$${cleanFee}`} </div>
                </div>
                <div className='booking-form-bttm-r1'>
                    <div className='booking-form-bttm-left'>Service fee</div>
                    <div className='booking-form-bttm-right'>{`$${serviceFee * (calNights < 0 || isNaN(calNights) ? 0 : calNights)}`} </div>
                </div>
                <div className='booking-form-bttm-r4'>
                    <div className='booking-form-bttm-left2'>Total before taxes</div>
                    <div className='booking-form-bttm-right2'>{`$${spot.price * calNights + serviceFee * calNights + cleanFee}`} </div>
                    <div className='booking-form-bttm-right2'>{`$${(spot.price + serviceFee) * calNights + cleanFee}`} </div>
                    <div className='booking-form-bttm-right2'>${totalPrice(spot.price)} </div>
                </div>
                {showLoginModal && (
                    <Modal onClose={() => setShowLoginModal(false)}>
                        <LoginForm onClose={() => setShowLoginModal(false)} />
                    </Modal>
                )}
            </div>
        </>
    )
}

export default CreateSpotBooking;
