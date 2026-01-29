import express from 'express';
import { AllTasks, InsertTaskList, ProgressTaskList, PendingTaskList, FinishedTaskList, DeleteTaskList } from '../controllers/taskModal.controller';
import { requireAuth } from '../middleware/auth.middleware';

const router = express.Router();

router.post('/all', requireAuth, AllTasks);
router.post('/createTaskList', requireAuth, InsertTaskList);
router.post('/pendingTasks', requireAuth, PendingTaskList);
router.post('/progressTasks', requireAuth, ProgressTaskList);
router.post('/finishedTasks', requireAuth, FinishedTaskList);
router.post('/deleteTask', requireAuth, DeleteTaskList);


export default router;


