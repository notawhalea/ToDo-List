const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')))

app.use( (req, res, next) => {
    res.sendFile('/index.html')
})

app.listen(PORT)