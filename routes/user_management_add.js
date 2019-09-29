var express = require('express');
var router = express.Router();
//引入数据库包
var db = require("./db.js");

router.get('/', function (req, res) {
    res.render('user_management_add',{layout:null});
});
router.post('/', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var sex = req.body.sex;
    db.query("insert into users(uname,ukey,usex) values('" + username + "','" + password + "','" + sex + "')", function (err, rows) {
        console.log("insert into user(uname,ukey,usex) values('" + username + "','" + password + "','" + sex + "')");
        if (err) {
            return res.end(err);
        } else {
            return res.redirect('/user_management');
        }
    })
});

module.exports = router;