import express from 'express';
import { AllTasksCards, CreateTaskCard } from '../controllers/taskCard.controller';
const router = express.Router();

router.post('/allTaskCards', AllTasksCards);
router.post('/createTaskCard', CreateTaskCard);


export default router;


