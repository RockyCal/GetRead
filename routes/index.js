var books = require('../books.json');
var index = 0;
var prev = books["books"].length-1;
var next = index + 1;

exports.view = function(req, res) {
	var currentBook = books["books"][index];
	var title = currentBook.title;
	res.render('index', {currentBook: currentBook, title: title});
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
	res.render('index', {currentBook: currentBook, title: title});
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
	res.render('index', {currentBook: currentBook, title: title});
}