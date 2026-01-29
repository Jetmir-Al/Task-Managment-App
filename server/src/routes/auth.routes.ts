import express from 'express';
import { register, login, logout, status, DeleteUser, UpdateName, UpdateEmail, UpdatePsw } from '../controllers/auth.controller';
import { requireAuth } from '../middleware/auth.middleware';


const router = express.Router();

router.post('/signup', register);
router.post('/login', login);
router.post('/logout', requireAuth, logout);
router.get('/status', requireAuth, status);
router.post('/deleteUser', requireAuth, DeleteUser);
router.put('/updateName', requireAuth, UpdateName);
router.put('/updateEmail', requireAuth, UpdateEmail);
router.put('/updatePsw', requireAuth, UpdatePsw);

export default router;