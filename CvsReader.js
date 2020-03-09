const parse = require('csv-parse');
const fs = require('fs');
const cityModel = require('./models/city')
class CvsReader{

    static readCSVAndParse(csvFile){
        const output = []

        fs.createReadStream(csvFile)
            .pipe(parse({
                delimiter: ',',
                trim: true,
                skip_empty_lines: true
            })
                .on('readable', function(){
                    let record
                    while (record = this.read()) {
                        output.push(record)
                        let city = cityModel.createCity(record);
                    }
                })
                // When we are done, test that the parsed output matched what expected
                //.on('end', function(){

                //    console.log(output);

                //})
);


    }


}
module.exports = CvsReader;






