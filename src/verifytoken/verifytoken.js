var express = require('express');
 var router = express.Router();
 var jwt = require('jsonwebtoken');
const { token } = require('morgan');
const { con } = require('../connect')
 
 router.use(function (req, res, next) {
    var bearHeader = req.headers['authorization'];
    var bear = bearHeader.split(' ');
    var token = bear[1];
    console.log(token);
    if (token) {jwt.verify(token, 'secretKey', (err, authData)=>{
        decode = jwt.decode(token)
        if(decode){
            var sql ="SELECT * FROM users WHERE email='" +decode.email+"'";
            con.query(sql,function(err, result){
            if(result){
                next();
            } else{
                    return res.status(403).json({
                        message: 'Forbidden Access'
                    });
                }
            })
        }else{
            return res.status(403).json({
                message: 'Forbidden Access'
            });
        }

    });
    } else {
            return res.status(403).json({
            message: 'Forbidden Access'
       });
    }
 });
 
 module.exports = router;