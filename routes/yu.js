var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('Yu',{title: '渔',user:req.session.user});
});

module.exports = router;