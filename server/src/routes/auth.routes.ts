import express from 'express';
import { register, login, logout, status, DeleteUser, UpdateName, UpdateEmail, UpdatePsw } from '../controllers/auth.controller';
import { requireAuth } from '../middleware/auth.middleware';
import { isLoginBody, isSignUpBody, isUpdEmail, isUpdName, isUpdPsw } from '../validators/auth.validator';
import { validateBody } from '../middleware/validate.middleware';


const router = express.Router();

router.post('/signup', validateBody(isSignUpBody), register);
router.post('/login', validateBody(isLoginBody), login);
router.post('/logout', logout);
router.get('/status', requireAuth, status);
router.delete('/deleteUser', requireAuth, DeleteUser);
router.put('/updateName', requireAuth, validateBody(isUpdName), UpdateName);
router.put('/updateEmail', requireAuth, validateBody(isUpdEmail), UpdateEmail);
router.put('/updatePsw', requireAuth, validateBody(isUpdPsw), UpdatePsw);

export default router;