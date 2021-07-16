var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
// session相關
var session = require('express-session');
// const MysqlStore = require('express-mysql-session')(session);
// const db = require(__dirname + '/database/db.connect');
// const sessionStore = new MysqlStore({}, db);

var indexRouter = require('./routes/index');
var bookingRouter = require('./routes/booking');
var memberRouter = require('./routes/members');
// var cartRouter = require('./routes/cart');
// var messageRouter = require('./routes/message');
// var itemRouter = require('./routes/items');

var app = express();

// session 
app.use(
  session({
    cookieName: 'session',
    secret: 'eg[isfd-8yF9-7w2315df{}+Ijsli;;to8',
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
    // httpOnly: false, //for localhost
    httpOnly: true, 
    // secure: false, //for localhost
    secure: true,
    ephemeral: true,
    resave: true,
    saveUninitialized: true,
  })
)


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter); 
app.use('/booking', bookingRouter);

// 先comment掉 因為檔案目前沒有export東西會噴錯誤
app.use('/members', memberRouter);
// app.use('/cart', cartRouter);
// app.use('/message', messageRouter);
// app.use('/items', itemRouter);



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
