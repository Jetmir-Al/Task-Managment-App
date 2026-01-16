import express from 'express';
import { AllTasksCards, CreateTaskCard, DeleteTaskCard } from '../controllers/taskCard.controller';
const router = express.Router();

router.post('/allTaskCards', AllTasksCards);
router.post('/createTaskCard', CreateTaskCard);
router.post('/deleteTaskCard', DeleteTaskCard);


export default router;


