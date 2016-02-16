var books_data = require('../books.json');
var books = books_data["books"];

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

exports.viewLikes = function(req, res) {
	res.render('liked')
}

exports.likeBook = function(req, res) {
	var book = findBookByTitle(req.params.title);
	book.liked = true;
	res.json(book);
}