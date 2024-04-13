import express from "express"

const app = express();

app.get("/", (req, res) => {
    res.send("hola desde vsc!")
})


app.get("/testing", (req, res) => {
    res.send("testing!")
})

// queries parametros
// app.get("/params/nombre", (req, res) => {
//     res.send("nombres")
// })

app.get("/params/:nombre/:apellido", (req, res) => {
    let name = req.params.nombre;
    let lastname = req.params.apellido;
    res.send(`Bienvenido ${
        name[0].toUpperCase() + name.slice(1).toLowerCase()
    } ${ lastname.charAt(0).toUpperCase() + lastname.slice(1).toLowerCase()}!`)
})

const usuarios = [
    {id: 1, nombre: "Juan", apellido: "Perez", carrera: "DM"},
    {id: 1, nombre: "Camila", apellido: "Perez", carrera: "DW"},
    {id: 1, nombre: "Pepe", apellido: "Perez", carrera: "CA"},
    {id: 1, nombre: "Maria", apellido: "Perez", carrera: "DW"},
    {id: 1, nombre: "Carlos", apellido: "Perez", carrera: "DM"}
]

app.get("/api", (req, res) => {
    res.send(usuarios)
})

app.get("/users", (req, res) => {

    let {carrera} = req.query;
    // res.send(carrera)
    if(!carrera || (carrera.toUpperCase() != "DW" &&  carrera.toUpperCase() != "DM" &&  carrera.toUpperCase() != "CA")) return res.send({usuarios})

    let filterUsers = usuarios.filter(u => u.carrera === carrera.toUpperCase())
    res.send(filterUsers)

})








app.listen(3000, () => console.log("server running on port http://localhost:3000"))