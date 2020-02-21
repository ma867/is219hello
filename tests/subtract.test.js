const subtraction = require('../subtraction');

test('subtracts 1 - 2 to equal -1', () => {
    expect(subtraction.subtract(1, 2)).toBe(-1);
});