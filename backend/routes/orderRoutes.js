import express from 'express'
const router = express.Router()
import { authUser, getUserProfile, registerUser, updateUserProfile } from '../controllers/userController.js'
import { addOrderItems, getOrderById } from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

//------------- AUTH USER ROUTE ---------------//
router.route('/').post(protect, addOrderItems)
router.route('/:id').get(protect, getOrderById)

export default router