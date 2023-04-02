import express from 'express';
import User from '../models/userModel.js';
import * as uc from '../controllers/userController.js';

const router = new express.Router()

router.get('/all', uc.getAllUsers);

router.post('/users/new', uc.register);

router.get('/userid/:id', uc.getUserDetails);

export default router;