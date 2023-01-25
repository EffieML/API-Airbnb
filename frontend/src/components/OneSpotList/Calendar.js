import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar } from 'react-date-range';
import { getSpotAllBookingsThunk } from "../../store/bookings";
import { bookingDays } from '../../utils/bookingDays';
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


    return (
        <>
            <div className="reservation-calendar-container">
                <div className="reservation-calendar">
                    <Calendar className="check-Calendar"
                        minDate={new Date()}
                        disabledDates={bookedDates}
                        color='#ff385c'
                    />
                </div>
                <div className="reservation-calendar">
                    <Calendar className="check-Calendar"
                        minDate={new Date()}
                        shownDate={nextMonth}
                        disabledDates={bookedDates}
                        color='#ff385c'
                    />
                </div>
            </div>
        </>
    )
}
export default ShowCalendar;
