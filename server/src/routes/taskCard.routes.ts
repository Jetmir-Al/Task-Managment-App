import express from 'express';
import { AllTasksCards } from '../controllers/taskCard.controller';
const router = express.Router();

router.post('/allTaskCards', AllTasksCards);


export default router;


