import express from "express"
import { createUser, getUsers, updateUser } from "../controllers/usuarios_controller.js";

const ruta = express.Router();

ruta.get("/", (req, res) => {
    let resultado = getUsers();
    resultado
        .then((users) => { res.status(200).json(users) })
        .catch((error) => { res.status(400).json(error) })
})

ruta.post("/", (req, res) => {
    let body = req.body;
    let resultado = createUser(body);
    resultado
        .then((user) => { res.status(201).json(user) })
        .catch((error) => { res.status(400).json(error) })
})

ruta.put("/:email", (req, res) => {
    let body = req.body;
    let resultado = updateUser(body, req.params.email);
    resultado
        .then((user) => { res.status(201).json(user) })
        .catch((error) => { res.status(400).json(error) })
})

export default ruta;