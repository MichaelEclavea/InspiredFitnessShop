import express from 'express'
const router = express.Router()
import { authUser } from '../controllers/userController.js'


//------------- AUTH USER ROUTE ---------------//
router.post('/login').get(authUser);



export { authUser }