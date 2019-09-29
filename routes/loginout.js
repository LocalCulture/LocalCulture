var mysql = require('mysql');
var express = require('express');
var router = express.Router();

/* GET logout page. */
router.get("/",function(req,res){    // 到达 /logout 路径则登出， session中user对象置空，并重定向到根路径
    req.session.admin = null;
    req.session.user = null;
    res.redirect("/");
});
module.exports = router;