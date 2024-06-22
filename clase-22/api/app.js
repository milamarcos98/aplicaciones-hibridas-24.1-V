import express from 'express';
import mongoose from 'mongoose';
import { userRoutes } from './routes/index.js';
import 'dotenv/config';
import cors from "cors"

mongoose.connect("mongodb://127.0.0.1:27017/kanban", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {console.log('Conectado a MongoDB...')
})
    .catch(err => console.log('No se pudo conectar con MongoDB..', err));


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/',(req, res) => {
    res.send("kanban database");
});

app.use('/users', userRoutes);

// app.use(function(req, res, next){
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
//     res.setHeader('Access-Contro-Allow-Credentials', true);
//     next()
// })

// Allow all Origins
app.use(cors())
// app.use(cors({
//     origin: 'www.front-hermoso.com',
//     methods: ['GET', 'POST', 'PUT'],
//     allowedHeaders: ['Content-Type']
// }))

const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`    ░▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▒
    ░▐▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓▀▌▀▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▐▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓▓  ░   ▀▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▐▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓███████▓▓▓▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▐▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓██████████▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▐▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▀▓█▓▀▀▓▌▐▀▒▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▐▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▄███▄▓▌  ▐▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌█████▀  ▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌█████▀░▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▀▀▀▀▀░  ▀▀▀   ░▀▀▀▀▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▀        ░               ▀▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌ ░                         ▐▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▒▒░░                  ▒░      ▐▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▓▌▌▌▌▌▌▒░▒▒░            ░    ░░▓██▄     ▀▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▓▌▌▌▌▀░▄▓▓██░ ░         ░░ ░▄▐▄▒▌▀█▓░     ▀▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▓▌▌▌▌▄▒▒▒█▓▓░           ░  ░▒▒▓███▓▓█▓▄    ▀▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▓▌▌▌▌███▀▀▌▀              ░░░▒▓███▌▌▓███▄  ▐▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▓▌▌▌▌▓█▌▒▌ ░▌      ░    ░░ ░ ░▒▒▓▓▌▌▌▌▌▓██▄▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▓▌▌▌▌▓▒█▌▌░ ░ ░░░░   ░   ▐ ░░▒░▓▒▐▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▓▌▌▌▌▓░░▌▌▌░ ░░░░ ░░░ ░ ░ ░░  ░▒▄▌▌▀▀▀▀▀▀▀▀▌▌▌▌▒▌▀▒▒▌▌▌▐▀▒▐▒▌▒░ ▒▌▌▌▌░ ▒▌▌▌▌▌▌
    ░▓▌▌▌▌▓░▓▓▌▌▌▓▄▄▄▄▒░░░░░░░   ░ ░▌▌▌▌▒        ▐▌▌▒▒  ▒▌▌▓▐  ░▐▌    ▐▌▌▌   ▓▌▌▌▌▌
    ░▓▌▌▌▌▓▓▓█▀▓▌▀▓██████▓▓▄▌▄▄▄▄▓▒▌▌▌▌▌▒   ▌▄▄   ▐▌▒▒  ▒▌▌▌▒  ░▐▌    ░▀▌▓   ▐▌▌▌▌▌
    ░▓▌▌▌▌▌█▓▌▌▌▌▒▒▒░░▐▀▀▓██████▀▀░ ▐▌▌▌▒   ▌▌▌    ▌▌░  ▐▌▌▓▒   ▐▌░    ▒▓▓   ▐▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▒▌███▓▄▄▄▒▐▄▄▒░░░    ▐▌▌▌   ▌▌▓   ▐▌▌   ▐▌▌▌▒   ▓▌      ▐▌░  ▀▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▀▒▀▒░░░▒▀▄░▄▓░ ░▀░░░▐▌▌▌         ▓▌▌   ▐▌▌▌░   ▓▌   ▐   ▀▒  ▐▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▄░░░      ░▓█▄░░░░░▐▌▌▌▌   ▄    ▌▌▌▌   ▐▌▌▌▒   ▐▌   ▐▌      ▐▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▒░░░       ▓█▀▐░░░▌▌▌▌▌  ░▌▌   ▀▌▌▒   ▐▌▌▓░   ▐▌   ▐▌▒     ▐▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▒░░░░     ▐█░░░ ▓▌▌▌▌▒  ░▌▓░  ▐▌▌▌   ▐▌▌▓░  ░▓▌░  ▐▌▌▒    ▐▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▓▒▒░░░     ▓█░░▐▌▌▌▌▌▒   ▌▌▌   ▐▌▌░  ░     ░▐▌▌   ▐▌▌▌▒   ▐▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓▌░░░    ▐█▓░▓▌▌▌▌▌▒   ▌▌▓   ▒▓▌▓▄▌░ ░▒▒▒▓▌▌▌░░▒▐▌▌▌▌▌▒▒▓▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓▓▒░░░   ▀▒▐▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▀▒▀▀▀▀▀░   ▒▌▌▌▌▌▌▌▀▀▀▀▓▌▀▀▀▀▌▌▌▌▌▌▌▌▌▌▌▌▌▀▀▀▓▌▌▀▀▀▌▌▌▌▌▓▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▓██▓▌▀▓█▓▄     ▌▌▌▌▌▌▌ ▐▄▄▌  ▄  ▀    ▐▌    ▐▒ ▄▄▄▌ ▄▄ ▐▄▄  ▄▄▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▓█████▄█▀▓█▓░░▓▐▌▌▌▌▌▌▌ ▐▀▓▌ ▐▌▒ ▐ ▐▌  ▌ ▐▌  ▒ ▀▌▌▌ ░▓▌▌▌▌ ▐▌▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▒█████▒██▀▀▀▒▓▌▌▌▌▌▌▌▒ ▐▄▐▌ ▐▌▒ ▐    ▐▌    ▓▒ ▄▄▓▌▌░ ░▓▌▌ ▐▌▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌░▀██▀▒▓▒▓▒▐░▓░▓▌▌▌▌▌▌▒ ▓▌▌▌ ▐▌░ ▐ ▐▌ ▐▌ ▐░ ▓▒ ▓▌▌▀▒▌▓  ▌▌ ▐▌▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌░ ░ ▐▒░░▒▄▄█▒▌▓▌▌▌▌▌▌▒ ▐▌▌▓▒░  ▒▓ ▐▌  ▌ ▐▌ ▐▒   ░▌░░ ░▄▌▌░▐▌▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌░░░ ▐▌░░▄▌▀█▓▐▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌░  ▐▓▐███▓▓█▌▒▌▌▌▌▌▌▌▓▀▓▓▓▀▓▌▌▌▌▌▒▌▀▐▌▌▌▌▐▀▀▌▒▌▌▒▀▀▌▌▌▌▀▀▀▓▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓▓▌▒▀▌▀█▓▒▓▒▐▌▌▌▌▌▌▒        ▐▌▌▒▒  ▒▌▌▓▒  ░▐▌    ▐▌▌▌   ▓▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓▌▀▀▀▓▌▄▐▌▌▌▌▌▌▒   ▄▄▄   ▐▌▒▒  ▒▌▌▓▒  ░▐▌    ▐▓▌▓░  ▐▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▒▓▄░░░░▒▒▌▌▌▌▌▌▌   ▌▌▌    ▌▌░  ▐▌▌▓▒  ▐▐▌     ▒▓▓   ▐▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▀▓▒░░░░░▐▌▌▌▌▌▌   ▌▌▌   ▐▌▌   ▐▌▌▌▒   ▓▌░     ▐▓░  ▓▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓▄▒░░░░▄▄▌▌▌▌▌▌   ░░    ▓▌▌   ▐▌▌▌▒   ▓▌   ▌   ▀▒  ▐▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓██▀▓█▓▌▌▌▌▌▌▌        ▓▌▌▌   ▐▌▌▌▒   ▐▌   ▓▌      ▐▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▀    ▀▌▌▌▌▌▌▌  ░▌▌   ▓▌▌▒   ▐▌▌▓░   ▐▌   ▐▌▒     ▐▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌      ▀▌▌▌▌▌▒  ░▌▓░  ▐▌▌▌   ▐▌▌▌░   ▓▌░  ▓▌▌░    ▐▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌       ░▓▌▌▌▒   ▌▌▌   ▀▌▌░   ░     ▒▌▌   ▐▌▌▌▒   ▐▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▄▄▀████▓▌▌▌▌▒   ▌▌▓   ▒▓▌▓▄▒░ ░▄▒▒▄▓▌▌░ ░▐▌▌▌▌▄░▒▐▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓▓▌▌▌▌▌▌▌▌▌▓▌▓▌▌▌▌▓▓▓▓▌▌▌▌▌▌▓▓▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▀▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
                                                                                ░`);
console.log(`

  ██████╗ ██╗   ██╗███╗   ██╗     █████╗ ██████╗ ██╗    ██████╗ ██╗   ██╗███╗   ██╗██╗
  ██╔══██╗██║   ██║████╗  ██║    ██╔══██╗██╔══██╗██║    ██╔══██╗██║   ██║████╗  ██║██║
  ██████╔╝██║   ██║██╔██╗ ██║    ███████║██████╔╝██║    ██████╔╝██║   ██║██╔██╗ ██║██║
  ██╔══██╗██║   ██║██║╚██╗██║    ██╔══██║██╔═══╝ ██║    ██╔══██╗██║   ██║██║╚██╗██║╚═╝
  ██║  ██║╚██████╔╝██║ ╚████║    ██║  ██║██║     ██║    ██║  ██║╚██████╔╝██║ ╚████║██╗
  ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝    ╚═╝  ╚═╝╚═╝     ╚═╝    ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝
                                                              
        `);
})