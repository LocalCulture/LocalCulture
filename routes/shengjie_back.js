var express = require('express');
var db = require("./db.js");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var newsql='SELECT * FROM shengjie';
    db.query(newsql,
        function (err, rows) {
            if(err){
                res.render('shengjie_back', {title: '绳结', data: [],layout:null});
            }
            else{
                res.render('shengjie_back',{title: '绳结',data:rows,layout:null});
                // res.send(rows);
            }
        });
});

module.exports = router;