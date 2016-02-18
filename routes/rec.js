var books_data = require('../books.json');
var data = require('../data.json');
var books = books_data["books"];
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
	
exports.view = function(req, res) {
	res.render('recommendations');
}

exports.recBook = function(req, res) {
	var book = findBookByTitle(req.params.title);
	if(book.recommended){
		book.recommended = false;
		var idx = recommendations.indexOf(book)
		recommendations.splice(idx, 1);
	}
	else{
		book.recommended = true;
		recommendations.push(book);
	}
	res.json(book);
}