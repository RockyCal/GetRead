/* filename: bookpage.js
	 created: 2/4/16 
	 created by: Marisa Kanemoto | mkanemoto@ucsd.edu */

var books = require("../books.json");

function initializePage() {
	console.log("JavaScript active!");
}

exports.viewBooks = function(req, res){
	var title = req.params.title;
	var booksArr = books["books"];
	for (i = 0; i < booksArr.length; i++) {
		if (booksArr[i].hasOwnProperty("title") && booksArr[i]["title"] === title) {
			var book = booksArr[i];
			break
		}
	}
	console.log(book);
	var author = book.author;
	var coverSource = book.coverSource;
	var description = book.description; 
	res.render('bookpage', {
		'title': title,
		'author': author,
		'coverSource': coverSource,
		'description': description
	}
	); //last line of function
};