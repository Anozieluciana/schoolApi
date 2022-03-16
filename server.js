require('./db')

const express = require ('express')
const port = process.env.PORT || 1999
// const { append } = require('express/lib/response')
// const port = 1999

const app = express()

const myRoute = require('./route')
app.use(express.json())
app.use('/api', myRoute)


app.listen(port, ()=>{
    console.log('listening to port'+port)
})