import express from 'express';
import { AllTasks, InsertTaskList } from '../controllers/taskModal.controller';
const router = express.Router();

router.post('/all', AllTasks);
router.post('/createTaskList', InsertTaskList);


export default router;


