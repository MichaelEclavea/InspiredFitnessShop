import express from 'express'
const router = express.Router()
import { getProducts, getProductById, deleteProduct } from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

//------------- FETCH ALL PRODUCTS /  ---------------//
router.route('/').get(getProducts);
//---------------- FETCH SINGLE PRODUCT BY PARAM ID------------ //
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct);

export default router;