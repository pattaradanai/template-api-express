const router = require('express').Router()
const controllers = require('../../controllers/user.controller')
const auth = require('../auth')

router.post('/register',controllers.register)
router.post('/login', controllers.login)
router.get('/list',auth.required, controllers.listUser)

module.exports = router