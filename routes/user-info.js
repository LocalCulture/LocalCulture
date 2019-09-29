var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('User-info',{title: '个人中心',user:req.session.user});
});

module.exports = router;
