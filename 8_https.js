/////Method 2
const {send, read} = require('./8_internals') 
function makeRequest(url,data){
    send(url,data)
    return read();
}
const responseData = makeRequest('https://www.google.com','Hello')
console.log(responseData)
////Method 1
// const internals = require('./8_internals')
// // const {send} = require('./request.js')
// // const {read} = require('./response.js')

// function makeRequest(url,data){
//     internals.send(url,data)
//     return internals.read();
// }
// const responseData = makeRequest('https://www.google.com','Hello')
// console.log(responseData)