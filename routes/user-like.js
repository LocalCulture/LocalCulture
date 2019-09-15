var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('User-like',{title: '个人中心'});
});

module.exports = router;
