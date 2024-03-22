// const operaciones = require("./index")

// console.log(operaciones)

// const {suma} = require("./index")

// console.log(suma(2,4))

// const userData = require("./usuarios.json")
// console.log(userData)
// console.log(userData.usuarios[0].nombre)

function greet2(name){
    return `Holis, ${name}`
}

module.exports = {greet2}


import("./esm.mjs").then(({greet})=> {
    console.log(greet("cami"))
})