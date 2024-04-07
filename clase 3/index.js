// FS - FileSystem

const fs = require('fs')
// import fs from "fs"


// leer un archivo

// fs.readFile('data.txt', 'utf8',(err, data)=> {
//     if(err){
//         console.log('Error reading file:', err);
//         return;
//     }

//     console.log('File content:', data)
// })

// ---

// escribir en archivo

// const contenido = "Holis, texto nuevo!";

// fs.writeFile('output.txt',contenido, 'utf8',(err)=> {
//     if(err){
//         console.log('Error wrinting file:', err);
//         return;
//     }

//     console.log('File written successfully!')
// })

// ---

// file stats

// fs.stat('data.txt', (err, data)=> {
//     if(err){
//         console.log('Error reading file stats:', err);
//         return;
//     }

//     console.log('File stats:', data.size, 'bytes')
// })


// ---

// read dir

// fs.readdir(__dirname, (err, data)=> {
//     if(err){
//         console.log('Error reading directory:', err);
//         return;
//     }

//     console.log('File in dir:', data)
// })

// ---

// fs.copyFile('data.txt', 'data-copy.txt',(err) => {
//         if(err){
//         console.log('Error copying file:', err);
//         return;
//     }

//     console.log("file copied successfully!")

// })

// ---

// fs.rename('data.txt', 'new-data.txt',(err) => {
//         if(err){
//         console.log('Error renaming file:', err);
//         return;
//     }

//     console.log("file renamed successfully!")

// })

// ---

// crear carpetas

// fs.mkdir('files/videos', (err) => {
//         if(err){
//         console.log('Error creating directory:', err);
//         return;
//     }

//     console.log("directory created successfully!")

// })

// ---

// fs.unlink('data-copy.txt', (err) => {
//         if(err){
//         console.log('Error renaming file:', err);
//         return;
//     }

//     console.log("file removed successfully!")

// })

// fs.rmdir('text', (err) => {
//             if(err){
//             console.log('Error removing dir:', err);
//             return;
//         }
    
//         console.log("dir removed successfully!")
    
//     })


// ---

// const watcher = fs.watch('new.txt')
// watcher.on('change', (eventType, filename) => {
//     console.log("change:", eventType)
//     console.log("file " + filename + " was modified")
// })

//  ---

const contenido = "\r\n\n 1.Holis, sumo otro";

fs.appendFile('new.txt',contenido, (err)=> {
    if(err){
        console.log('Error appending to file:', err);
        return;
    }

    console.log('File appended successfully!')
})

