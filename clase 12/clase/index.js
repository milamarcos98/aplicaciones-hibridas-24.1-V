import express from "express"
import mongoose from "mongoose"
import "dotenv/config"
import user_routes from "./routes/usuarios_routes.js"
import cursos_routes from "./routes/cursos_routes.js"
import auth from "./routes/auth.js"

// mongodb://127.0.0.1:27017/cursos
mongoose
    .connect(process.env.MORGO_DEPLOY)
    .then(() => console.log("conectado a DB"))
    .catch(() => console.log("error al conectar"))

    // mongodump --db=cursos
    // mongorestore --uri mongodb+srv://milamarcos98:1234@cluster0.khxruqc.mongodb.net/clase12v "C:\Users\Alumno\Desktop\dump\dump\cursos"

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/users", user_routes)
app.use("/cursos", cursos_routes)
app.use("/login", auth)


const port = process.env.PORT || 3002
app.listen(port)