var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('Yi_sheng',{title: '绳结'});
});

module.exports = router;