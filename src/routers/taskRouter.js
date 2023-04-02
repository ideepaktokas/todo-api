import express from 'express';
import * as uc from '../controllers/taskController.js';
import { isAuthenticated } from '../middleware/auth.js';

const router = new express.Router()

router.post('/new', isAuthenticated, uc.newTask);
router.get('/my', isAuthenticated, uc.getMyTask);
router.route('/:id').put(isAuthenticated, uc.updateTask).delete(isAuthenticated, uc.deleteTask);

export default router;