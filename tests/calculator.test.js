// tests/calculator.test.js
const { calculateAvailableSeats } = require('../src/calculator');

test('Розрахунок вільних місць на подію', () => {
    expect(calculateAvailableSeats(100, 30)).toBe(70);
    expect(calculateAvailableSeats(50, 50)).toBe(0);
    expect(calculateAvailableSeats(20, 25)).toBe(0); // Захист від перевищення
});