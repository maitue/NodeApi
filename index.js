const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const routes = require('./src/routes/routes')
const mongoose = require('mongoose')
const mysql = require('mysql');

const app = express()
const PORT = process.env.PORT || 8080
const db = mongoose.connection;

dotenv.config()

//connect db
// mongoose.connect(process.env.DB_URL, {  
//     useNewUrlParser: true, 
//     useUnifiedTopology: true }).then(() => console.log('DB Connected!'));
// db.on('error', (err) => {
//     console.log('DB connection error:', err.message);
// })

// app.use(morgan("dev"))

var con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.USER_NAME,
  password: process.env.PASSWORD_MYSQL,
  database: process.env.DATABASE_NAME
});
con.on('error', function(err) {
    console.log("[mysql error]",err);
  });
con.connect(function(err) {
  console.log(process.env.MYSQL_HOST);
});
app.use(bodyParser.json())
app.use('/', routes)
con.connect(function(err) {
    console.log("Connected!");
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
        console.log(err);
      console.log("Table created");
    });
  });
app.listen(PORT, () => {console.log("Server started on http://localhost:"+PORT)})

module.exports = app;
