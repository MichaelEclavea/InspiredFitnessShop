import express from 'express'
const router = express.Router()
import { authUser, getUserProfile } from '../controllers/userController.js'


//------------- AUTH USER ROUTE ---------------//
router.post('/login', authUser);
router.route('/profile').get(getUserProfile);


export default router