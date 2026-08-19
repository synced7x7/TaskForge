const express = require("express")
const app = express()
const PORT = 5000

app.get("/api/health" , (req, res) => {
    res.send('Health check OK')
})

app.listen(PORT, () => {
 console.log(`Server running at http://localhost:${PORT}`)
})

