const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller')

//api/products
router.post('/', productController.createProduct)
router.get('/', productController.getAllProduct)
router.put('/:id', productController.updateProduct)
router.get('/:id', productController.getProduct)
router.delete('/:id', productController.deleteProduct)



module.exports = router;