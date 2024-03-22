console.log("holis")
console.log("holis 2")

// SISTEMA DE MODULOS

// common js
// esm - ecma script modules

const suma = (num1, num2) => {
    return num1 + num2
}
const resta = (num1, num2) => {
    return num1 - num2
}
const multiplicacion = (num1, num2) => {
    return num1 * num2
}

// commonjs
// module.exports = {suma, resta, multiplicacion}


// export function greet(name){
//     return `Hello, ${name}`
// }

export default {resta, suma, multiplicacion};

function greet2(name){
    return `Holis, ${name}`
}

export {greet2 as greet2Function}