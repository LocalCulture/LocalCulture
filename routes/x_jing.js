var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('X_jing',{title: '乡景'});
});

module.exports = router;