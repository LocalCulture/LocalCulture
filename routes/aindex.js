var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if(!req.session.admin){                     //到达/aindex路径首先判断是否已经登录
        return res.redirect("/");                //未登录则重定向到 /login 路径
    }
    res.render('aindex',{admin:req.session.admin,layout:null});         //已登录则渲染home页面
});

module.exports = router;