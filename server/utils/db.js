import mysql from 'mysql'

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql123",
    database: "coffee_shop"
})

conn.connect(function(err) {
    if(err) {
        console.log("connection error")
    } else {
        console.log("connected")
    }
})

export default conn;