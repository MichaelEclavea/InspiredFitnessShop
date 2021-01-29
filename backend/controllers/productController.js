import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

//------------- FETCH ALL PRODUCTS ---------------//
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})
//---------------- FETCH SINGLE PRODUCT BY PARAM ID------------ //
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})
//---------------- DELETE PRODUCT BY ID / API/PRODUCTS/:ID / ADMIN ------------ //
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    await product.remove()
    res.json({message: 'Product Removed'})
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

//---------------- CREATE PRODUCT / POST / API/PRODUCTS/:ID / ADMIN ------------ //
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Enter name',
    price: 0,
    user: req.user.id,
    image: 'Enter image url',
    brand: 'Enter brand name',
    category: 'Enter category',
    countInStock: 0,
    numReviews: 0,
    description: 'Enter description',
  })
  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})

//---------------- UPDATE PRODUCT / PUT / API/PRODUCTS/:ID / ADMIN ------------ //
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
  } = req.body
  const product = await Product.findById(req.params.id)
  if(product) {
    product.name = name
    product.price = price
    product.description = description
    product.image = image
    product.brand = brand
    product.category = category
    product.countInStock = countInStock

      const updatedProduct = await product.save()
      res.json(updatedProduct)
  } else {
      res.status(404)
      throw new Error('Product not found')
  }
})

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
}
