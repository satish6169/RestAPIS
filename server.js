const express = require('express')
const app = express()

const port = 3000

app.use(express.json()) //Middleware for JSON body parsing

// GET /health - returns server status
app.get('/health', (req, res)=>{
   res.status(200).json({status: "Server is healthy"})
})

// POST /echo - returns whatever JSON body you send it
app.post('/echo', (req, res)=>{
    res.status(200).json(req.body)
})

// GET /time - returns current server time in UTC
app.get('/time', (req, res)=>{
    res.status(200).json({ time: new Date().toISOString() })
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})