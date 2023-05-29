const AuthController = require('../controllers/auth.controller')
const Router = require('express')
const router =  new Router()


router.get('/register', AuthController.register)



module.exports = router