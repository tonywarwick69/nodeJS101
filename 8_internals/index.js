////Method 2
const request = require('./request')
const response = require('./response')
module.exports = {
    send: request.send,
    read : response.read
}

///////Method 1
// module.exports = {
//     request: require('./request'),
//     response : require('./response')
// }