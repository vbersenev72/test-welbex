const PostController = require('../controllers/post.controller.js')
const Router = require('express')
const router = new Router()


// router.get('/all', PostController.getAll)
router.post('/create', PostController.create)
// router.put('/update', PostController.update)
// router.delete('/delete/:id', PostController.delete)

module.exports = router