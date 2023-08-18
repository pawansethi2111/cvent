const mysql = require('mysql')

const dbConfig = mysql.createConnection({
    host: "localhost",
    database: "userdb",
    user:process.env.USER,
    password: process.env.password
})

dbConfig.connect((error)=>{
    if(error) throw error
    console.log('database connected successfully')
})

module.exports = dbConfig