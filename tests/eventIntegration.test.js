// tests/eventIntegration.test.js
const { processEventCreation } = require('../src/eventService');

test('Інтеграція модулів обробки події', () => {
    const inputData = {
        title: ' Node.js Meetup ',
        category: 'workshop',
        date: '2030-05-10',
        totalSeats: 100,
        registered: 45
    };

    const result = processEventCreation(inputData);

    expect(result).toHaveProperty('title', '[WORKSHOP] Node.js Meetup');
    expect(result).toHaveProperty('availableSeats', 55);
    expect(result).toHaveProperty('status', 'Published');
});

test('Інтеграційний тест викидає помилку при невалідній даті', () => {
    const invalidData = {
        title: 'Old Event',
        category: 'meetup',
        date: '2015-01-01',
        totalSeats: 50,
        registered: 10
    };

    expect(() => processEventCreation(invalidData)).toThrow('Invalid event date');
});