const {con} = require('../connect')

var sql = 'DROP TABLE questions';

con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("deleted table success");
})
