import express  from "express"
const router = express.Router();
import {promises} from "fs"

// localhost:3000/personajes => get
router.get("/", (req, res) => {
    promises.readFile("./data/simpsons.json")
    .then((data) => {
        const personajes = JSON.parse(data);
        res.status(200).json(personajes)
    })
    .catch((error) => {
        console.log(error.message)
        res.json({errorCode: 3435, msg: error.message})
    })
})

// localhost:3000/personajes/3 => get
router.get("/:id", (req, res) => {
    promises.readFile("./data/simpsons.json")
    .then((data) => {
        const personajes = JSON.parse(data);
        const personaje = personajes.find(p => p.id == req.params.id)
        if(personaje){
            res.status(200).json(personaje)
        }else{
            res.status(404).json({errorCode: 3435, msg: `Personaje no encontrado #${req.params.id}`})
        }
    })
    .catch((error) => {
        console.log(error.message)
        res.json({errorCode: 3435, msg: error.message})
    })
})

// localhost:3000/personajes => post
router.post("/", (req, res) => {
    promises.readFile("./data/simpsons.json")
    .then((data) => {
        const personajes = JSON.parse(data);
        const personaje = req.body;
        personaje.id = personajes.length + 1
        personajes.push(personaje)

        promises.writeFile("./data/simpsons.json", JSON.stringify(personajes))
        .then(() => {
            res.status(201).json(personaje)
        })
    })
    .catch((error) => {
        console.log(error.message)
        res.json({errorCode: 3435, msg: error.message})
    })
})

router.put("/:id", (req, res) => {
    promises.readFile("./data/simpsons.json")
    .then((data) => {
        const personajes = JSON.parse(data);
        const personaje = personajes.find(p => p.id == req.params.id)
        if(personaje){
            const index = personajes.indexOf(personaje)
            personajes[index] = {
                id: parseInt(req.params.id),
                ...req.body
            }
            promises.writeFile("./data/simpsons.json", JSON.stringify(personajes))
            .then(() => {
                res.status(201).json(personajes)
            })
        }
    })
    .catch((error) => {
        console.log(error.message)
        res.json({errorCode: 3435, msg: error.message})
    })
})

router.patch("/:id", (req, res) => {
    promises.readFile("./data/simpsons.json")
    .then((data) => {
        const personajes = JSON.parse(data);
        const personaje = personajes.find(p => p.id == req.params.id)
        if(personaje){
            const index = personajes.indexOf(personaje)
            personajes[index] = {
                id: parseInt(req.params.id),
                ...personajes[index],
                ...req.body
            }
            promises.writeFile("./data/simpsons.json", JSON.stringify(personajes))
            .then(() => {
                res.status(201).json(personajes)
            })
        }
    })
    .catch((error) => {
        console.log(error.message)
        res.json({errorCode: 3435, msg: error.message})
    })
})



router.delete("/:id", (req, res) => {
    res.send("")
})

export default router;