import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createSpotBookingThunk } from "../../../store/bookings";
import './CreateSpotBooking.css'

function CreateSpotBooking({ spot }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { spotId } = useParams();
    const currUser = useSelector(state => state.session.user)

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    // const [hasSubmitted, setHasSubmitted] = useState("");
    const [errors, setErrors] = useState([]);
    const numberOfNights = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;
    // const numberOfNights = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24) + 1;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBooking = {
            startDate,
            endDate
        }

        const addedBooking = await dispatch(createSpotBookingThunk(newBooking))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });

        if (addedBooking) {
            setErrors([]);
            history.push(`/bookings/current`)
        }
    };

    return (
        <>
            hello
        </>
    )
}

export default CreateSpotBooking;
