require('dotenv').config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000
const db = require('./config/db')
const authRoutes = require('./routes/authRoutes')

app.use(express.json())

app.use('/api/user', authRoutes)
app.get("/api/health", (req, res) => {
    res.send('Health check OK')
})

async function startServer() {
    try {
        await db()
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log(error.message)
    }
}

startServer()