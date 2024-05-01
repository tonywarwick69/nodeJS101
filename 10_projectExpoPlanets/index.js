const fs = require('fs')
const {parse} = require('csv-parse')
const assert = require('node:assert')
const results = []
const habitablePlanets = []
function isHabitablePlanet(planet){
    return planet['koi_disposition'] === 'CONFIRMED'  
          && planet['koi_insol'] >0.36 && planet['koi_insol'] < 1.11
          && planet['koi_prad'] <1.6;
  }

//pipe function connect readable stream source to writable stream destination
//on fucntion return even emiter
fs.createReadStream('kepler_data.csv')
.pipe(parse({
    comment: '#',
    columns: true,
    
}
))
.on('data',(data) =>{
    results.push(data)
    if(isHabitablePlanet(data))
        habitablePlanets.push(data)
})
.on('error',(err)=>{
    console.log(err)
})
.on('end',()=>{
    //console.log(results)
    console.log(`${habitablePlanets.length} habitable planets found!`)
    habitablePlanets.forEach(planet => {
        console.log(`Name of planets was found in data: ${planet.kepler_name}`)
    })
    //console.log(habitablePlanets.kepler_name)
    //console.log(`Name of planets was found in data: ${habitablePlanets}`)
})

// habitablePlanets.push(isHabitablePlanet(results))
// console.log(`Habitable planets: ${habitablePlanets}`)