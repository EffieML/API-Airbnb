import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar } from 'react-date-range';
import { getSpotAllBookingsThunk } from "../../store/bookings";
import { bookingDays } from '../../utils/bookingDays';
// import { getDaysArray } from "../../utils/functions";
import './Calendar.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

function ShowCalendar({ spotId }) {
    const dispatch = useDispatch();
    const spotBookings = useSelector(state => state.bookings.allBookings)
    // console.log('allbookings', spotBookings)
    const [isLoaded, setIsLoaded] = useState(false);
    const spotBookingsArr = Object.values(spotBookings)
    // console.log('allbookings arr', spotBookingsArr)
    const nextMonth = new Date();
    nextMonth.setMonth(nextMonth.getMonth() + 1);

    useEffect(() => {
        dispatch(getSpotAllBookingsThunk(spotId)).then(() => setIsLoaded(true));
    }, [dispatch, spotId]);

    let bookedDates = []
    for (let booking of spotBookingsArr) {
        bookedDates = bookedDates.concat(bookingDays(booking.startDate, booking.endDate));
    }
    // console.log('bookedDates1 arr', bookedDates)

    // let disabledDates = []
    // for (let booking of spotBookingsArr) {
    //     disabledDates = disabledDates.concat(getDaysArray(booking.startDate, booking.endDate));
    // }
    // console.log('disabledDates arr', disabledDates)
    return (
        <>
            <div className="onespot-calendar-container">
                <div className="onespot-calendar">
                    <Calendar className="onespot-calendar1"
                        minDate={new Date()}
                        disabledDates={bookedDates}
                        color='#222222'
                    />
                </div>
                <div className="onespot-calendar">
                    <Calendar className="onespot-calendar2"
                        minDate={new Date()}
                        shownDate={nextMonth}
                        disabledDates={bookedDates}
                        color='#222222'
                    />
                </div>
            </div>
        </>
    )
}
export default ShowCalendar;
