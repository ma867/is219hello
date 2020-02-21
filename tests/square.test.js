const squaring = require('../squaring');

test('square 2 should equal 4', () => {
    expect(squaring.square(2)).toBe(4);
});