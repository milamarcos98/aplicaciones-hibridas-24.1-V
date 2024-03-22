// OS

// const os = require("os")
// import os from "os"

// console.log(os.platform())
// console.log(os.arch())
// console.log(os.totalmem())
// console.log(os.freemem())
// console.log(os.userInfo())

// path

// const path = require("path")
import { dirname, join, resolve, isAbsolute, basename, extname, parse, format} from "path"
import { fileURLToPath } from "url"

// commonjs
// const filename = __filename
// const dirname = __dirname

// esm
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

console.log(__filename)
console.log(__dirname)

// ruta relativa
const joinedPaths = join('archivos', 'txt', 'file.txt')
// ruta absoluta
const resolvedPaths = resolve('archivos', 'txt', 'file.txt')
// const joinedPaths2 = path.join('archivos', 'txt', 'file.txt')
// console.log(joinedPaths)
// console.log(resolvedPaths)

// console.log(isAbsolute(joinedPaths))
// console.log(isAbsolute(resolvedPaths))

// console.log(basename(__filename))
// console.log(basename(__dirname))
// console.log(extname(__filename))
// console.log(extname(__dirname))
// console.log(parse(__filename))
// console.log(parse(__dirname))
// console.log(format(parse(__dirname)))

// console.log(join('archivos', 'txt', 'file.txt'))
// console.log(join('/archivos', '//txt', 'file.txt'))
// console.log(join('/archivos', 'txt', '../../file.txt'))