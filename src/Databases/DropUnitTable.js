const {con}  = require('../connect')
var sql = 'DROP TABLE units';

con.query(sql, function (err, result) {
    if (err) throw err;
    console.log('deleted unit table success');
})