
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
var like = require('./routes/like');
var rec = require('./routes/rec');
var history = require('./routes/history');
var user = require('./routes/user');
var friends = require('./routes/friends');


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
app.get('/like/:title', like.likeBook);
app.get('/recommend/:title/:to', rec.recBook);
app.get('/signup', user.view);
app.get('/login', user.login);
app.get('/friends', friends.view); 	//marisa says: i hope i'm doing this right

// Start server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
