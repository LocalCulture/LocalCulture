var express = require('express');
var db = require("./db.js");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //假如有传递进来的页码，比如2，那么当前的init_page的值则更改为传递进来的值
    var input_id=293;
    if(req.query.id){
        input_id = parseInt(req.query.id);
    }
    console.log(input_id);
    var newsql='SELECT * FROM tbnews WHERE id = '+input_id+';';
    console.log(newsql);
    db.query(newsql, function(err,rows,fields) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return false;
        }
       else{
            console.log(rows);
            res.render('X_gushi',{title: '故事详情',data:rows});
        }
    });
});

module.exports = router;