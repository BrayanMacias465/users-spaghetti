const express = require('express')

const port = 9000
const app = express()

const usersRouter = require('./users/users.router')

app.use(express.json())

app.use('/api/v1', usersRouter)

app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
}) 

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
