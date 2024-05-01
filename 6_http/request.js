function encrypt(data){
    return 'encrypted data'
}
function send(url,data){
    const encryptedData = encrypt(data);
    console.log(`sending ${encryptedData} to ${url}`)
}
//Export function for global usages
module.exports ={
    send,
}