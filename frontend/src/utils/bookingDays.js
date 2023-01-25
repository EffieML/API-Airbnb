export const bookingDays = function (start, end) {
    const daysArray = [];
    let currentDate = new Date(start);
    while (currentDate <= end) {
        daysArray.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return daysArray;
}
