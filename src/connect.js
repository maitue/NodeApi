const dotenv = require('dotenv')
const mysql = require('mysql');
dotenv.config();
const con = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.USER_NAME,
    password: process.env.PASSWORD_MYSQL,
    database: process.env.DATABASE_NAME,
  });
  module.exports= {con};