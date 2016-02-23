/* Get data */
var books_data = require('../books.json');
var data = require('../data.json');
var user_data = require('../users.json')

/* Get arrays of interest in data */
var books = books_data["books"];
var users = user_data["users"];
var recommendations = data["recommendations"];

/* helper function to find books */
function findBookByTitle(btitle){
	var title = btitle;
	for (i = 0; i < books.length; i++) {
		if (books[i].hasOwnProperty("title") && books[i]["title"] === title) {
			var book = books[i];
			return book;
		}
	}
}

/* helper function to find users given only their username */
function findUserByUsername(username){
	var uname = username;
	for (i = 0; i < users.length; i++) {
		if (users[i].hasOwnProperty("username") && users[i]["username"] === uname) {
			var user = users[i];
			return user;
		}
	}
}
	
exports.view = function(req, res) {
	var recommendations = data["recommendations"]
	res.render('recommendations', {'recommendations':recommendations});
}

exports.recBook = function(req, res) {
	var book = findBookByTitle(req.params.title);
	var to = req.params.to;
	console.log('to: ' + to);
	var user = findUserByUsername(to);
	if(book.recommended){
		book.recommended = false;
		var idx = recommendations.indexOf(book)
		recommendations.splice(idx, 1);
	}
	else{
		if(to){
			book.toFriend = true;
			book.to = to;
			book.toFullName = user.fullName;
		}
		book.recommended = true;
		recommendations.push(book);
	}
	console.log(recommendations);
	res.json(book);
}