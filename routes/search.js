var express = require('express');
var router = express.Router();
//引入数据库包
var db = require("./db.js");

/**
 * 查询
 */
/*router.get('/',function (req,res) {
    res.render('User_management');
})*/

router.post('/', function (req, res) {
    var username = req.body.ausername;

    db.query("select * from users where uname='"+ username+"'", function (err, rows) {
        if (err) {
            res.end("查询失败：", err);
        } else {
            res.render("user_management", {title: '用户查询', datas: rows, ausername: username,layout:null});
        }
    });
});

module.exports = router;