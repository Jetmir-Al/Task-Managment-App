import express from 'express';
import { register, login, logout, status, DeleteUser } from '../controllers/auth.controller';


const router = express.Router();

router.post('/signup', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/status', status);
router.post('/deleteUser', DeleteUser);

export default router;