var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // console.log("11111");
    res.render('partials/header',{user:req.session.user,layout:null});         //已登录则渲染home页面
});

module.exports = router;