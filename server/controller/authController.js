const User = require('../models/User')

async function registerUser(req, res) {

    try {
        const { username, email, password } = req.body

        const existingUser = await (User.findOne({ email }))

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: 'User already exists',
            })
        }

        const user = await User.create({
            username,
            email,
            password,
            role: 'user'
        })

        res.send('User created successfully')

    } catch (error) {
         res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

module.exports = {
    registerUser,
}