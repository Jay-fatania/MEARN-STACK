const express = require('express')
const router = express.Router()
const customerController = require('./customerService')
const authenticate =  require('../../middleware/authentication')
const {addusrValidation} = require('../../validation/validationUser')
const { customernotFound } = require('./customerConstant')

router.get('/customer/showCustomer',    customerController.showcustomer)
router.post('/customer/showone/:id',  customerController.showone)
router.post('/customer/addCustomer',  customerController.addCustomer)
router.put('/customer/updateCustomer/:id',  customerController.updateCustomer)
router.delete('/customer/delete/:id',  customerController.deleteCustomer)
router.post('/customer/login', customerController.login)

module.exports = router