import express from 'express';
import { AllTasksCards, CreateTaskCard, DeleteTaskCard, UpdFinishedTaskCard, UpdInProgressTaskCard } from '../controllers/taskCard.controller';
const router = express.Router();

router.post('/allTaskCards', AllTasksCards);
router.post('/createTaskCard', CreateTaskCard);
router.post('/deleteTaskCard', DeleteTaskCard);
router.post('/updateFinishedTask', UpdFinishedTaskCard);
router.post('/updateProgressTask', UpdInProgressTaskCard);


export default router;


