const division = require('../division');

test('divides 1 / 2 to equal 0.5', () => {
    expect(division.divide(1, 2)).toBe(0.5);
});