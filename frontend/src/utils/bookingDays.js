export const bookingDays = function (start, end) {
    let startDate = new Date(start)
    console.log("startdate", start, startDate)
    let endDate = new Date(end)

    const daysArray = [];
    let currentDate = startDate;
    while (currentDate <= endDate) {
        daysArray.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return daysArray;
}
