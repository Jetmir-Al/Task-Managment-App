import express from 'express';
import { register, login, logout, status } from '../controllers/auth.controller';


const router = express.Router();

router.post('/signup', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/status', status);


export default router;