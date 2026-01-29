import express from 'express';
import { AllTasks, InsertTaskList, ProgressTaskList, PendingTaskList, FinishedTaskList, DeleteTaskList } from '../controllers/taskModal.controller';
import { requireAuth } from '../middleware/auth.middleware';
import { validateBody } from '../middleware/validate.middleware';
import { isCreateTaskList, isDeleteTaskList } from '../validators/taskModal.validatori';

const router = express.Router();

router.post('/all', requireAuth, AllTasks);
router.post('/createTaskList', requireAuth, validateBody(isCreateTaskList), InsertTaskList);
router.post('/pendingTasks', requireAuth, PendingTaskList);
router.post('/progressTasks', requireAuth, ProgressTaskList);
router.post('/finishedTasks', requireAuth, FinishedTaskList);
router.post('/deleteTask', requireAuth, validateBody(isDeleteTaskList), DeleteTaskList);


export default router;


