const cvsreader = require('../CvsReader');

test('read cvs parse it and print it out', () => {
    let csvFile = "C:\\Users\\MAlzate\\WebstormProjects\\is219hello\\data\\WorldCitiesShortList";
    let output = cvsreader.readCSVAndParse(csvFile);
    expect(cvsreader.readCSVAndParse(csvFile)).toStrictEqual(output);
});

