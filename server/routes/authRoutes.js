const express = require ('express')
const router = express.Router()
const { registerUser } = require('../controller/authController')

router.post('/reg', registerUser)

module.exports = router