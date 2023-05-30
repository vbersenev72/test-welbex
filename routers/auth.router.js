const AuthController = require('../controllers/auth.controller')
const Router = require('express')
const router = new Router()


router.post('/register', AuthController.register)



module.exports = router