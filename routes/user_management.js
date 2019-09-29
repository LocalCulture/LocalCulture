var express = require('express');
var router = express.Router();
//引入数据库包
var db = require("./db.js");

/**
 * 查询列表页
 */
router.get('/', function (req, res, next) {
    db.query('select * from users', function (err, rows) {
        console.log(rows);
        if (err) {
            res.render('user_management', {title: '用户管理', datas: [],layout:null});
        } else {

            res.render('user_management', {title: '用户管理', datas: rows,layout:null});
        }
    })
});

/*router.get('/user_management_add', function (req, res) {
    res.render('user_management_add');
});
router.post('/user_management_add', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var sex = req.body.sex;
    console.log(username);
    console.log(password);
    console.log(sex);
    db.query("insert into userinfo(username,password,sex) values('" + username + "','" + password + "','" + sex + "')", function (err, rows) {
        if (err) {
            res.end('新增失败：' + err);
        } else {
            res.redirect('/User_management');
        }
    })
});*/
/**
 * 修改
 */
/*router.get('/toupdate/:Id', function (req, res) {
    var Id = req.params.Id;
    console.log(Id);
    db.query("select * from userinfo where Id=" + Id, function (err, rows) {
        if (err) {
            res.end('修改页面跳转失败：' + err);
        } else {
            res.render('user_management_update', {datas: rows});       //直接跳转
        }
    });
});

router.post('/user_management_update', function (req, res) {
    var Id = req.body.Id;
    var username = req.body.username;
    res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    var password=req.body.password;
    var sex = req.body.sex;
    db.query("update userinfo set username='" + username + "',password='" + password + "',sex= '" + sex + "' where Id=" + Id, function (err, rows) {
        console.log("update userinfo set username='" + username + "',password='" + password + "',sex= '" + sex + "' where Id=" + Id);
        if (err) {
            res.end('修改失败：' + err);
        } else {
            res.redirect('/User_management');
        }
    });
});*/
/**
 * 删
 */
router.get('/del/:Id', function (req, res) {
    var Id = req.params.Id;
    db.query("delete from user where uid=" + Id, function (err, rows) {
        if (err) {
            res.end('删除失败：' + err);
        } else {
            res.redirect('/user_management');
        }
    });
});

/**
 * 查询
 */
router.get('/search',function (req,res) {
    res.render('user_management',{layout:null});
});

router.post('/search', function (req, res) {
    var username = req.body.ausername;

    db.query("select * from users where uname ='"+ username+"'", function (err, rows) {
        if (err) {
            res.end("查询失败：", err);
        } else {
            res.render("user_management", {title: '用户查询', datas: rows, ausername: username,layout:null});
        }
    });
});

module.exports = router;