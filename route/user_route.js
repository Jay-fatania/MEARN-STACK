/*const express = require('express')
const router = express.Router()
const userController = require('../controller/user_controller')
const upload = require('../middleware/uploads')
const authenticate =  require('../middleware/authentication')
const validate = require('../validation/validationUser')

router.get('/showuser', authenticate, userController.showuser)
router.post('/showone', userController.showone)
router.post('/adduser', upload.single('usr_image'),userController.adduser)
router.put('/update', userController.update)
router.delete('/delete', userController.deleteUser)
router.post('/register', upload.single('usr_image'),userController.register)
router.post('/login', userController.login)

module.exports = router*/