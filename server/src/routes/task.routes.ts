import express from 'express';
import { AllTasks, InsertTaskList, ProgressTaskList, PendingTaskList, FinishedTaskList, DeleteTaskList } from '../controllers/taskModal.controller';
const router = express.Router();

router.post('/all', AllTasks);
router.post('/createTaskList', InsertTaskList);
router.post('/pendingTasks', PendingTaskList);
router.post('/progressTasks', ProgressTaskList);
router.post('/finishedTasks', FinishedTaskList);
router.post('/deleteTask', DeleteTaskList);


export default router;


