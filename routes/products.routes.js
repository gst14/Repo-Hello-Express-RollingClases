const Router = require('express')
const { getProducts, getProductById, editProduct, createProduct, deleteProduct } = require('../controllers/products.controllers')
const router = Router()

router.get('/', getProducts)

router.get('/:id', getProductById)

router.put('/:id', editProduct)

router.post("/", createProduct)

router.delete("/:id", deleteProduct)

module.exports = router;