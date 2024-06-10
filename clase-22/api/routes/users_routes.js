import express  from 'express';
import verificarToken from '../middlewares/auth.js';
import { getUsers, getUser, registerUser, loginUser } from '../controllers/users_controller.js';
const userRoutes = express.Router();

userRoutes.get('/', getUsers);

userRoutes.get('/find/:userId', getUser);

userRoutes.post('/register', registerUser);

userRoutes.post('/login', loginUser);


export {userRoutes};