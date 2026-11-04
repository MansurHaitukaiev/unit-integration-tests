// src/validators.js
function isEventDateValid(dateString) {
    const eventDate = new Date(dateString);
    return !isNaN(eventDate.getTime()) && eventDate > new Date();
}
module.exports = { isEventDateValid };