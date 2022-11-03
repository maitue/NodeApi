const User = require('../Models/UserModels')
const bcrypt = require('bcrypt');
const {con} = require('../connect')

exports.register = function(req, res, next){   
    con.connect(function(err) {
        bcrypt.hash(req.body.password, 10, function(err, hash){ 
            var sql = "INSERT INTO users (email, password, username, paswword_confirm) VALUES ('"+ req.body.email +"','" + hash + "','" + req.body.username +"','" + hash +"')";
            con.query(sql, function (err, result) {
                res.send(result);
            });
        })
      });
}
