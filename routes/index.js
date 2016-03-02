var books = require('../books.json');
var data = require('../users.json');
var users = data["users"];
var index = 0;
var prev = books["books"].length-1;
var next = index + 1;
var friends = users[0].friends;
var usersFriends = [];

/* helper function to find users given only their username */
function findUserByUsername(uname){
	var friends = friends;
	var uname = uname;
	for (i = 0; i < users.length; i++) {
		if (users[i].hasOwnProperty("username") && users[i]["username"] === uname) {
			var thisFriend = users[i];
			return thisFriend;
		}
	}
}

/* helper function to get friends */
function getFriends() {
	usersFriends = [];
	for (j = 0; j < friends.length; j++) {
		var thisFriend = findUserByUsername(friends[j].username);
		usersFriends.push(thisFriend);
	}
}

exports.view = function(req, res) {
	var currentBook = books["books"][index];
	var title = currentBook.title;
	var liked = currentBook.liked;
	var recommended = currentBook.recommended;
	getFriends();
	res.render('index', {currentBook: currentBook, title: title, liked: liked, recommended: recommended, friends: usersFriends});
}

exports.viewAlt = function(req, res) {
	var currentBook = books["books"][index];
	var title = currentBook.title;
	var liked = currentBook.liked;
	var recommended = currentBook.recommended;
	getFriends();
	res.render('indexAlt', {currentBook: currentBook, title: title, liked: liked, recommended: recommended, friends: usersFriends});
}

exports.nextBook = function(req, res) {
	prev = index;
	index = next;
	next++;
	if(next >= books["books"].length){
		next = 0;
	}
	var currentBook = books["books"][index];
	var title = currentBook.title;
	var liked = currentBook.liked;
	var recommended = currentBook.recommended
	getFriends();
	res.render('index', {currentBook: currentBook, title: title, liked: liked, recommended: recommended, friends: usersFriends});
}

exports.nextBookAlt = function(req, res) {
	prev = index;
	index = next;
	next++;
	if(next >= books["books"].length){
		next = 0;
	}
	var currentBook = books["books"][index];
	var title = currentBook.title;
	var liked = currentBook.liked;
	var recommended = currentBook.recommended
	getFriends();
	res.render('indexAlt', {currentBook: currentBook, title: title, liked: liked, recommended: recommended, friends: usersFriends});
}

exports.prevBook = function(req, res) {
	next = index;
	index = prev;
	prev--;
	if(prev < 0){
		prev = books["books"].length;
	}
	var currentBook = books["books"][index];
	var title = currentBook.title;
	var liked = currentBook.liked;
	var recommended = currentBook.recommended;
	getFriends();
	res.render('index', {currentBook: currentBook, title: title, liked: liked, recommended: recommended, friends: usersFriends});
}

exports.prevBookAlt = function(req, res) {
	next = index;
	index = prev;
	prev--;
	if(prev < 0){
		prev = books["books"].length;
	}
	var currentBook = books["books"][index];
	var title = currentBook.title;
	var liked = currentBook.liked;
	var recommended = currentBook.recommended;
	getFriends();
	res.render('indexAlt', {currentBook: currentBook, title: title, liked: liked, recommended: recommended, friends: usersFriends});
}