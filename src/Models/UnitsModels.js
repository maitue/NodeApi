const {con} = require('../connect')
const date = require('date-and-time')

exports.create_unit = function (req) {
            const  now = new Date();
            let sql = "INSERT INTO units (name,created_at) VALUES('"+req.name+"','"+date.format(now,"YYYY-MM-DD")+"')";
            con.query(sql, function (err,result){
                return result;
            });
}

