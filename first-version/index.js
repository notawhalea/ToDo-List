const express = require('express')
const app = express()
const path = require('path')
const sequelize = require('./utils/database')
const toDoRoutes = require('./routes/todo')
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use('/api/todo', toDoRoutes)
app.use( (req, res, next) => {
    res.sendFile('/index.html')
})
async function start() {
    try {
        await sequelize.sync()
        app.listen(PORT)
    }
    catch (e) {
        console.log(e)
    }
}

start()

