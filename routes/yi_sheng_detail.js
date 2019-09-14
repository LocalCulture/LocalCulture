var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('Yi_sheng_detail',{title: '绳结详情'});
});

module.exports = router;