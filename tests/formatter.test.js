// tests/formatter.test.js
const { formatEventDetails } = require('../src/formatter');

test('Форматування назви та категорії події', () => {
    expect(formatEventDetails(' IT Конференція ', 'seminar')).toBe('[SEMINAR] IT Конференція');
    expect(formatDateOutput = formatEventDetails('хакатон', 'meetup')).toBe('[MEETUP] хакатон');
});