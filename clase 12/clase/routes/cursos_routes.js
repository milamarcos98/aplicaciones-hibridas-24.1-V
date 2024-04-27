import express from "express"
import { createCursos, deactivateCurso, getCursos, updateCursos } from "../controllers/cursos_controller.js";
import verificarToken from "../middlewares/auth.js";

const ruta = express.Router();

ruta.get("/", verificarToken, (req, res) => {
    let resultado = getCursos();
    resultado
        .then((users) => { res.status(200).json(users) })
        .catch((error) => { res.status(400).json(error) })
})

ruta.post("/:id", (req, res) => {
    let resultado = createCursos(req);
    resultado
        .then((user) => { res.status(201).json(user) })
        .catch((error) => { res.status(400).json(error) })
})

ruta.put("/:id", (req, res) => {
    let body = req.body;
    let resultado = updateCursos(req.params.id, body);
    resultado
        .then((user) => { res.status(201).json(user) })
        .catch((error) => { res.status(400).json(error) })
})

ruta.delete("/:id", (req, res) => {
    let body = req.body;
    let resultado = deactivateCurso(req.params.id, body);
    resultado
        .then((user) => { res.status(201).json(user) })
        .catch((error) => { res.status(400).json(error) })
})

export default ruta;