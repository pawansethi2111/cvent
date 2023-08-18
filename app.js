const express = require('express')
const env = require('dotenv').config()
const dbConfig =  require('./config/dbConfig')

const bodyparser = require('body-parser')
const cors = require('cors')
const app=express()
const user= require('./Routes/userRouter')
app.use(bodyparser.json())
app.use(cors())
 app.use('/user',user)

const PORT = process.env.PORT

app.listen(PORT, console.log(`server listening to the port ${PORT}`))
