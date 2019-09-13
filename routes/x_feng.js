var express = require('express');
var db = require("./db.js");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var init_page=1;//默认页码为1
    var num = 6;//每页要显示的数据量
    //假如有传递进来的页码，比如2，那么当前的init_page的值则更改为传递进来的值
    if(req.query.page){
        init_page = parseInt(req.query.page);
    }
    var start=0;//设置起始数据为第一条
    if(init_page>1){
        start = (init_page-1)*num; //页码减去1，乘以条数就得到分页的起始数了
    }
    // switch (req.query.page)
    // {
    //     case '1':document.getElementsByClassName('page-item active')[0].className='page-item';
    //
    // }
    var newsql='SELECT id,title,content,DATE_FORMAT(showdate,"%d") as day,DATE_FORMAT(showdate,"%Y-%m") as date FROM tbnews LIMIT '+start+','+num+';';
    db.query(newsql,
        function (err, rows) {
            if(err){
                res.render('X_feng', {title: '乡风', data: []});
            }
            else{
                res.render('X_feng',{title: '乡风',data:rows});
            }
        });
});

module.exports = router;
