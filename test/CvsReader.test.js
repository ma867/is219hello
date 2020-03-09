const csvreader = require('../CsvReader');

test('read cvs parse it and print it out', () => {
    let csvFile = "data/WorldCitiesShortList.csv";
    let output = csvreader.readCSVAndParse(csvFile);
    expect(csvreader.readCSVAndParse(csvFile)).toStrictEqual(output);
});

