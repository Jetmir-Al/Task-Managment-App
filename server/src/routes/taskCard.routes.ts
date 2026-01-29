import express from 'express';
import { AllTasksCards, CreateTaskCard, DeleteTaskCard, UpdFinishedTaskCard, UpdInProgressTaskCard } from '../controllers/taskCard.controller';
import { requireAuth } from '../middleware/auth.middleware';

const router = express.Router();

router.post('/allTaskCards', requireAuth, AllTasksCards);
router.post('/createTaskCard', requireAuth, CreateTaskCard);
router.post('/deleteTaskCard', requireAuth, DeleteTaskCard);
router.post('/updateFinishedTask', requireAuth, UpdFinishedTaskCard);
router.post('/updateProgressTask', requireAuth, UpdInProgressTaskCard);


export default router;


