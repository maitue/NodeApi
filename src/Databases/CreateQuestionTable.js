const  {con} = require('../connect')

con.connect(function (err){
    if (err) throw err;

    var sql = "CREATE TABLE questions (id INTEGER NOT NULL AUTO_INCREMENT, unit_id INTEGER , question_type INTEGER , question VARCHAR(255), PRIMARY KEY (id))";
    con.query(sql, function (err, result){
        if(err) throw err;
        console.log('create question success');
    });

})
