import express from 'express';
import { register, login, logout, status, DeleteUser, UpdateName, UpdateEmail, UpdatePsw } from '../controllers/auth.controller';


const router = express.Router();

router.post('/signup', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/status', status);
router.post('/deleteUser', DeleteUser);
router.put('/updateName', UpdateName);
router.put('/updateEmail', UpdateEmail);
router.put('/updatePsw', UpdatePsw);

export default router;