// src/eventService.js
const { isEventDateValid } = require('./validators');
const { calculateAvailableSeats } = require('./calculator');
const { formatEventDetails } = require('./formatter');

function processEventCreation(eventData) {
    if (!isEventDateValid(eventData.date)) {
        throw new Error('Invalid event date');
    }
    const available = calculateAvailableSeats(eventData.totalSeats, eventData.registered);
    const formattedTitle = formatEventDetails(eventData.title, eventData.category);

    return {
        title: formattedTitle,
        availableSeats: available,
        status: 'Published'
    };
}
module.exports = { processEventCreation };