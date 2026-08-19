require('dotenv').config()
const mongoose = require ('mongoose')

async function db () {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Database Connected')

    } catch (error) {
        console.log('Database error', error.message)
        throw error
    }
}

module.exports = db