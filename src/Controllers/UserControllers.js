const {Login} = require('../Models/UserModels')
const bcrypt = require('bcrypt');
const {con} = require('../connect')
const jwt = require('jsonwebtoken')

exports.register = function(req, res, next){   
    con.connect(function(err) {
        bcrypt.hash(req.body.password, 10, function(err, hash){ 
            var sql = "INSERT INTO users (email, password, username) VALUES ('"+ req.body.email +"','" + hash + "','" + req.body.username +"')";
            con.query(sql, function (err, result) {
                res.send(result);
            });
        })
      });
}

exports.login = function(req, res){
    let sql = "SELECT * FROM users WHERE email='"+req.body.email + "'";
    con.query(sql, function(err, result){
        result.forEach(element => {
            bcrypt.compare(req.body.password, element.password,function(err, result){
                if(result == false) {
                    res.send("loginError")
                }
                res.send({token:jwt.sign({id:element.id, email:element.email, username:element.username}, 'RESTFULAPIs')})              
            })
        });
    });
}