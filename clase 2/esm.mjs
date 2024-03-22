// import operaciones from "./index.js"

// console.log(operaciones)

// import { greet2Function as greet } from "./index.js";

// console.log(greet("cami"))

import { greet2 } from "./common.cjs";
console.log(greet2("cami"))

export function greet(name){
    return `Holis, ${name}`
}