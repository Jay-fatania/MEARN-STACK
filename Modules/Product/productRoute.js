const express = require('express')
const router = express.Router()
const productController = require('./productAPI')
const authenticate =  require('../../middleware/authentication')

router.get('/product/showProduct', authenticate, productController.showProduct)
router.post('/product/showoneProduct/:id', authenticate, productController.showoneProduct)
router.post('/product/addProduct', authenticate, productController.addProduct)
router.put('/product/updateProduct/:id', authenticate, productController.updateProduct)
router.delete('/product/deleteProduct/:id', authenticate, productController.deleteProduct)

module.exports = router 