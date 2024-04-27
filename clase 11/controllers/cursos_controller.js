import Cursos from "../models/cursos_model.js"

async function getCursos(){
    let cursosActivos = await Cursos.find({"estado": true})
    .populate('autor', 'nombre mail -_id')
    return cursosActivos;
}

async function createCursos(req){
    let cursoNuevo = new Cursos({
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        estado: true,
        autor: req.params.id
        // autor: {
        //     nombre: req.body.autorname,
        //     apellido: req.body.autorlastname,
        //     email: req.body.autoremail
        // }
    })
    return await cursoNuevo.save();
}

async function updateCursos(id, body){
    let cursoActualizado = await Cursos.findByIdAndUpdate(id, {
        $set: {
            titulo: body.titulo,
            descripcion: body.descripcion
        }
    }, {new: true})
    return cursoActualizado;
}

async function deactivateCurso(id){
    let cursoDesactivado = await Cursos.findByIdAndUpdate(id, {
        $set: {
            estado: false
        }
    }, {new: true})
    return cursoDesactivado;
}

export {getCursos, createCursos, updateCursos, deactivateCurso};


