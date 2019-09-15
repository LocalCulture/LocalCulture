var express = require('express');
var mysql = require('mysql');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    var db = mysql.createConnection({
        host: '127.0.0.1',
        user: 'user1',
        password: '123456',
        database: 'oceanculture'
    });
    console.log(req.body.uemail);
    db.query('SELECT ukey FROM users WHERE uemail = ? ',[req.body.uemail], function(err,rows,fields) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return false;
        }
        var pwd=req.body.upassword;
        if( rows[0].ukey!==pwd.toString()){
            console.log(rows[0].ukey);
            console.log(pwd.toString());
            res.send('账号或密码不正确!');
        }
        else{
            console.log('登录成功');//返回结果
            res.send('登录成功!');
        }
    });
});

module.exports = router;