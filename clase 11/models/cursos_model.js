import mongoose from "mongoose";
const Schema = mongoose.Schema;

// relaciones por referencia (normalizacion) => consistencia
// let usuario = {
//     id: '001',
//     nombre: "cami",
//     email: "cami@gmail.com"
// }

// let curso = {
//     id: 'adfadf',
//     titulo: "titulo",
//     descripcion: "descripcion",
//     autor: ['001', '002']
// }

// relaciones por documentos embebidos (desnormalizacion) => performance 

// let curso = {
//     id: 'curso1',
//     titulo: "titulo",
//     descripcion: "descripcion",
//     autor: {
//         nombre: "carlos",
//         apellido: "perez",
//         email: "carlos@gmail.com"
//     }
// }

// const autorSchema = new mongoose.Schema({
//     nombre: String,
//     apellido: String,
//     email: String
// })

const cursoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: false
    },
    estado: {
        type: Boolean,
        required: true
    },
    // autor/profe
    // autor: [autorSchema],
    autor: {
        type: Schema.Types.ObjectId, ref: 'users'
    },
    imagen: {
        type: String,
        required: false
    }
})

export default mongoose.model('Cursos', cursoSchema)