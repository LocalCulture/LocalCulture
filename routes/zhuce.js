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
    //用户名是否已经被注册了
    db.query('SELECT * FROM users Where uemail=?',[req.body.email],function (err,data) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return false;
        }
        else if(data.length>0){
            console.log(data);
            res.send("该邮箱已被使用！");
            return false;
        }
        else{
            db.query('INSERT INTO users SET ?', {
                uname: req.body.name,
                ukey: req.body.password,
                uemail: req.body.email
            }, function (err, result) {
                //插入成功后调用执行这个函数体
                if (err) {
                    res.send("注册失败");
                }
                else{
                    res.send('注册成功，恭喜您成为第'+result.insertId+'位用户！'); //转换成字符串发出
                    // return false;
                }
            });
        }
    });
});

module.exports = router;