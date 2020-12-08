const router = require('express').Router()
const controllers = require('../../controllers/user.controller')
const auth = require('../auth')
const validator = require('../../validators')

router.post('/register',controllers.register)
router.post('/login', controllers.login)
router.get('/list',auth.required, controllers.listUser)

module.exports = router