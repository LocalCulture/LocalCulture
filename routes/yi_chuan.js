var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('Yi_chuan',{title: '船模'});
});

module.exports = router;