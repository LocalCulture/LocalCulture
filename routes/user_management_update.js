var express = require('express');
var router = express.Router();
//引入数据库包
var db = require("./db.js");

/**
 * 修改
 */
router.get('/toupdate/:Id', function (req, res) {
    var Id = req.params.Id;
    console.log(Id);
    db.query("select * from users where uid=" + Id, function (err, rows) {
        if (err) {
            return res.end('修改页面跳转失败：' + err);
        } else {
            res.render('user_management_update', {datas: rows,layout:null});       //直接跳转
        }
    });
});

router.post('/toupdate/user_management_update', function (req, res) {
    res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    var Id = req.body.Id;
    var username = req.body.username;
    var password=req.body.password;
    var sex = req.body.sex;
    db.query("update user set uname='" + username + "',ukey='" + password + "',usex= '" + sex + "' where uid=" + Id, function (err, rows) {
        console.log("update user set uname='" + username + "',ukey='" + password + "',usex= '" + sex + "' where uid=" + Id);
        if (err) {
            return res.end(err);
        } else {
            res.redirect('/user_management');
        }
    });
});

module.exports = router;