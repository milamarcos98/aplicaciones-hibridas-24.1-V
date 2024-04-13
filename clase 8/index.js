import express from "express"
import path from "path"

const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))

import personajesRoutes from "./routes/personajes.js"
import locationsRoutes from "./routes/locations.js"

app.use('/personajes', personajesRoutes)
app.use('/locations', personajesRoutes)
app.get('/file', (req, res) => {
    res.sendFile('./public/file.html', {root: path.resolve()})
})



app.listen(3000, function(){
    console.log("server runnning...")
})