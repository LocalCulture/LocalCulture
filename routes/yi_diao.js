var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('Yi_diao',{title: '沙雕'});
});

module.exports = router;