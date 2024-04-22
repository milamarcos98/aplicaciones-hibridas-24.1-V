import express from "express"
import mongoose from "mongoose"
import "dotenv/config"
import user_routes from "./routes/usuarios_routes.js"

// mongodb://127.0.0.1:27017/cursos
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("conectado a DB"))
    .catch(() => console.log("error al conectar"))


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/users", user_routes)


const port = process.env.PORT || 3002
app.listen(port)