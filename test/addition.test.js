const addition = require('../addition');

test('adds 1 + 2 to equal 3', () => {
    let csvFile = 'Data/WorldCitiesShortList.csv';
    expect(addition.sum(1, 2)).toBe(3);
});