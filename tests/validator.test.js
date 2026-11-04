// tests/validator.test.js
const { isEventDateValid } = require('../src/validators');

test('Перевірка валідності дати події', () => {
    expect(isEventDateValid('2030-01-01')).toBe(true); // Майбутня дата
    expect(isEventDateValid('2020-01-01')).toBe(false); // Минула дата
    expect(isEventDateValid('invalid-date')).toBe(false); // Некоректний рядок
});