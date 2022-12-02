const { hash } = require("bcrypt");
const bcrypt = require("bcrypt");
const { body } = require("express-validator");
const {con} = require('../connect');
const jwt = require('jsonwebtoken')

exports.Login = function (req, res) {
    let sql = "SELECT * FROM users WHERE email='"+req.body.email + "'";
    con.query(sql, function(err, result){
        if(err) throw err;
        let password = "";
        let email = '';
        let username ='';
        let id=0;
        let token = {};
        result.forEach(element => {
            password = element.password;
            email = element.email;
            username = element.username;
            id = element.id
        });
        bcrypt.compare(req.body.password, password, function(err, result){
            if(result==true) {
                token = {token:jwt.sign({id:id, email:email, username:username}, 'RESTFULAPIs')}
                
            } else if(result == false) {
                console.log(2);
            }
        })
        res.send("true");
    });
}

