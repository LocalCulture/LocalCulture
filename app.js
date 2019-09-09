var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/users');
var fengRouter = require('./routes/x_feng');
var jingRouter = require('./routes/x_jing');
var yuRouter = require('./routes/yu');
var meituRouter = require('./routes/x_meitu');
var shengRouter = require('./routes/yi_sheng');
var gushiRouter = require('./routes/x_gushi');
var chuanRouter = require('./routes/yi_chuan');

var app = express();
var hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('css', function(str, option) {
  var cssList = this.cssList || [];
  str = str.split(/[,，;；]/);
  console.log('css: ',str);
  str.forEach(function (item) {
    if(cssList.indexOf(item)<0) {
      cssList.push(item);
      }});
  this.cssList = cssList.concat();
  });
hbs.registerHelper('js', function(str, option) {
    var jsList = this.jsList || [];
    str = str.split(/[,，;；]/);
    console.log('js: ',str);
    str.forEach(function (item) {
        if(jsList.indexOf(item)<0) {
            jsList.push(item);
        }});
    this.jsList = jsList.concat();
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/x_feng', fengRouter);
app.use('/x_jing', jingRouter);
app.use('/yu', yuRouter);
app.use('/x_meitu', meituRouter);
app.use('/yi_sheng', shengRouter);
app.use('/x_gushi', gushiRouter);
app.use('/yi_chuan', chuanRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
