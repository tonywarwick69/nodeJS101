//compare speed of Ascynchronous vs Synchronuos
//sync
// console.log('🐇 rabbit finish!')
// console.log('🐢 turtle finish!')

//async
setTimeout(() => {
    console.log('🐇 rabbit finish!'),1000;
    
})
console.log('🐢 turtle finish!');