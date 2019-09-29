var express = require('express');
var db = require("./db.js");
var router = express.Router();
var formidable = require('formidable');
var util = require('util');
/* GET home page. */
router.get('/', function(req, res, next) {
    var newsql='SELECT * FROM shengjie where id=?';
    console.log(req.layer.open.id);
    db.query(newsql,[req.layer.open.id],
        function (err, rows) {
            if(err){
                res.render('shengjie_edit', {title: '绳结', data: [],layout:null});
            }
            else{
                res.render('shengjie_edit',{title: '绳结',data:rows,layout:null});
                // res.send(rows);
            }
        });
});
router.post('/', function(req, res, next) {
    const form = new formidable.IncomingForm();
    form.uploadDir = "public/upload"; //上传文件存储的路径
    form.keepExtensions = true; //保留上传文件的文件后缀
    form.parse(req, function(err, fields, files) {
        if(files['picture']) {
            console.log("111111");
            console.log(util.inspect({fields: fields, files: files}));
            var picture_path = files['picture'].path; //服务器端的存储文件的路径地址
            //需要移除public/前缀后，再存入数据库
            picture_path = picture_path.replace('public', '');
            //创建数据库连接
            db.query('UPDATE shengjie SET ? where id=',[req.layer.open.id], {
                simg: picture_path
            }, function (err, result) {
                //插入成功后调用执行这个函数体
                if (err) {
                    res.send(null);
                }
                res.send(picture_path); //转换成字符串发出
            });
        }
        else
        {
            return  res.send('0');
        }
    });
});

module.exports = router;