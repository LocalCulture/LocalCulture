var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('X_meitu',{title: '美图',user:req.session.user});
});

module.exports = router;