import express from 'express';
import User from '../models/userModel.js';
import * as uc from '../controllers/userController.js';
import { isAuthenticated } from '../middleware/auth.js';

const router = new express.Router()

router.get('/all', uc.getAllUsers);

router.post('/register', uc.register);
router.post('/login', uc.login);
router.get('/logout', uc.logout);

router.get('/me', isAuthenticated, uc.getMyProfile);

router.route('/userid/:id').get(uc.getUserDetails).put(uc.updateUser).delete(uc.deleteUser);

// router.get('/userid/:id', uc.getUserDetails);
// router.put('/userid/:id', uc.updateUser);
// router.delete('/userid/:id', uc.deleteUser);

export default router;