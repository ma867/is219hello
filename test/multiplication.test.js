const multiplication = require('../multiplication');

test('multiplies 1 * 2 to equal 2', () => {
    expect(multiplication.multiply(1, 2)).toBe(2);
});