
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express-handlebars');

// Routes
var index = require('./routes/index');
var bookpage = require('./routes/bookpage');
var like = require('./routes/like')
var rec = require('./routes/rec');
<<<<<<< HEAD
var history = require('./routes/history')
var user = require('./routes/user')
=======
var history = require('./routes/history');
>>>>>>> 2a967c73652e6af226387d0ecba5426ac41c5950

// Create the server instance
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);

// Serving handlebars files!
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname,'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes 
app.get('/', index.view);
app.get('/likedBooks', like.viewLikes);  // view liked books
app.get('/recommendations', rec.view);   // view recommendations
app.get('/history', history.view)
app.get('/book/:title', bookpage.viewBooks);
app.get('/next', index.nextBook);
app.get('/prev', index.prevBook);
app.get('/like/:title', like.likeBook)
app.get('/signup',user.view)

// Start server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
