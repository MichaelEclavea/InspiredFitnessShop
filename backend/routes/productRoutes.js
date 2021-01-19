import express from 'express'
const router = express.Router()
import { getProducts, getProductById } from '../controllers/productController.js'


//------------- FETCH ALL PRODUCTS /  ---------------//
router.route('/').get(getProducts);
//---------------- FETCH SINGLE PRODUCT BY PARAM ID------------ //
router.route('/:id').get(getProductById);

export default router;