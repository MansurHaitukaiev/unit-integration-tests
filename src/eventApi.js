// src/eventApi.js
const axios = require('axios');

async function fetchRemoteEvents() {
    const response = await axios.get('https://api.events-service.com/v1/events');
    return response.data;
}

module.exports = { fetchRemoteEvents };