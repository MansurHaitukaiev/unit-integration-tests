// src/calculator.js
function calculateAvailableSeats(totalSeats, registeredCount) {
    if (totalSeats < registeredCount) return 0;
    return totalSeats - registeredCount;
}
module.exports = { calculateAvailableSeats };