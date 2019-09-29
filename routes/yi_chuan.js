var express = require('express');
var db = require("./db.js");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // res.render('Yi_chuan',{title: '船模'});
    var newsql='SELECT * FROM chuan';
    db.query(newsql,
        function (err, rows) {
            if(err){
                res.render('Yi_chuan', {title: '船模', data: [],user:req.session.user});
            }
            else{
                res.render('Yi_chuan',{title: '船模',data:rows,user:req.session.user});
                // res.send(rows);
            }
        });
});

module.exports = router;