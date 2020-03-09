const csvreader = require('../CsvReader');

test('read cvs parse it and print it out', () => {
    let csvFile = "C:\\Users\\MAlzate\\WebstormProjects\\is219hello\\data\\WorldCitiesShortList.csv";
    let output = csvreader.readCSVAndParse(csvFile);
    expect(csvreader.readCSVAndParse(csvFile)).toStrictEqual(output);
});

