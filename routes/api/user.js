const router = require('express').Router()
const controllers = require('../../controllers/user.controller')
const auth = require('../auth')
const validator = require('../../validators')

router.post('/register', controllers.Register)

module.exports = router