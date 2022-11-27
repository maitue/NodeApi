const {con} = require('../connect')

var sql = "CREATE TABLE units (id integer NOT NULL AUTO_INCREMENT, name VARCHAR(255), created_at DATE,  PRIMARY KEY (id) )";
 con.query(sql, function (err, result) {
     if(err) throw err;
     console.log('create units success');
 })