// tests/externalApi.test.js
const { fetchRemoteEvents } = require('../src/eventApi');
const axios = require('axios');

jest.mock('axios', () => ({
    get: jest.fn()
}));

describe('Інтеграція зовнішнього API подій', () => {
    test('Отримання списку подій з API через мок', async () => {
        const mockEvents = {
            data: [
                { id: 1, title: 'AI Summit', capacity: 200 },
                { id: 2, title: 'Cyber Security', capacity: 150 }
            ]
        };

        axios.get.mockResolvedValue(mockEvents);

        const events = await fetchRemoteEvents();

        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(events).toBeInstanceOf(Array);
        expect(events.length).toBe(2);
        expect(events[0]).toHaveProperty('title', 'AI Summit');
        expect(events[1].capacity).toBe(150);
    });
});