const { hash } = require("bcrypt");
const bcrypt = require("bcrypt");
const { body } = require("express-validator");
const {con} = require('../connect')
exports.Login = function (req, res) {
        let sql = "SELECT * FROM users WHERE email='"+req.body.email + "'"+ "AND password='" + bcrypt.hashSync(req.body.password,10)+ "'";
        var user = {};
        var user = con.query(sql, function(err, result){
            if(err) throw err;
            user = result;
            console.log(result)
        });
        console.log(user)
}