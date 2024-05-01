/*
Example of csv-parse stream api
const parse = require('csv-parse')
const assert = require('require')
const output = []
//Create the parser
delimeter = dau phan cach
const parser = parse({
    delimiter: ':'
})
//Use the readable stream api
parser.on('readable', function(){
    let record
    while(record = parser.read()){
        output.push(record)
    }
    //Catch any error
    parser.on('error',function(err){
        console.log(err.message)
    })
})
*/