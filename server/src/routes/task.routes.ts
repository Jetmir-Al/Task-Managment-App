import express from 'express';
import { AllTasks } from '../controllers/taskModal.controller';
const router = express.Router();

router.post('/all', AllTasks);


export default router;


