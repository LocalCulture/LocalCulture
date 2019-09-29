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
    var pwd=req.body.upassword;
    db.query('SELECT * FROM users WHERE uemail = ? ',[req.body.uemail], function(err,rows,fields) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return false;
        }
        console.log(rows);
        if(!rows[0]){
            console.log("11111111");
            db.query('SELECT * FROM admin WHERE ademail = ? ',[req.body.uemail], function(err,result,fields) {
                if(err){
                    console.log('[SELECT ERROR] - ',err.message);
                    return false;
                }
                if( result[0].adkey!==pwd.toString()){
                    console.log(result[0].adkey);
                    console.log(pwd.toString());
                    res.send('管理员账号或密码不正确!');
                }
                else{
                    console.log('管理员登录成功');//返回结果
                    req.session.admin= result;
                    console.log(req.session.admin[0].adname);
                    res.send('管理员登录成功!');
                }
            });
        }
        else if( rows[0].ukey!==pwd.toString()){
            console.log(rows[0].ukey);
            console.log(pwd.toString());
            res.send('用户账号或密码不正确!');
        }
        else{
            console.log('用户登录成功');//返回结果
            req.session.user=rows;
            console.log(rows);
            res.send('用户登录成功!');
        }
    });
});

module.exports = router;