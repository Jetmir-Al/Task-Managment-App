import express from 'express';
import { AllTasksCards, CreateTaskCard, DeleteTaskCard, UpdFinishedTaskCard, UpdInProgressTaskCard } from '../controllers/taskCard.controller';
import { requireAuth } from '../middleware/auth.middleware';
import { validateBody } from '../middleware/validate.middleware';
import { isAllTaskCards, isCreateTaskCard, isTaskCard } from '../validators/taskCard.validator';


const router = express.Router();

router.post('/allTaskCards', requireAuth, validateBody(isAllTaskCards), AllTasksCards);
router.post('/createTaskCard', requireAuth, validateBody(isCreateTaskCard), CreateTaskCard);
router.post('/deleteTaskCard', requireAuth, validateBody(isTaskCard), DeleteTaskCard);
router.post('/updateFinishedTask', requireAuth, validateBody(isTaskCard), UpdFinishedTaskCard);
router.post('/updateProgressTask', requireAuth, validateBody(isTaskCard), UpdInProgressTaskCard);


export default router;


