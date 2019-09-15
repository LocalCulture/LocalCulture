var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('Yi_hua',{title: '渔民画'});
});

module.exports = router;