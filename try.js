const parse = require('csv-parse')
const fs = require('fs');
let output = [];
const City = require('./models/city');


let csvFile = 'data/WorldCitiesShortList.csv';



fs.createReadStream(csvFile)
    .pipe(parse({
        delimiter: ',',
        trim: true,
        skip_empty_lines: true
    })
        .on('readable', function(){
            let record
            while (record = this.read()) {
                //output.push(record)
                //console.log(record[0], );
               let city = City.createCity(record);
               //console.log(city);
               output.push(city);
              //  this.myoutput.push(record)

            }
        })
        // When we are done, test that the parsed output matched what expected
        .on('end', function(){

         //   this.myoutput = output;
        //    return myoutput;

          //  console.log(output);
            return output;

        }));
console.log("YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
console.log(fs.createReadStream(csvFile));

