var books_data = require('../books.json');
var books = books_data["books"];
var data = require('../data.json');

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
	var likes = data["likes"];
	res.render('liked', {"likes":likes})
}

exports.likeBook = function(req, res) {
	var book = findBookByTitle(req.params.title);
	book.liked = true;
	data["likes"].push(book);
	res.json(book);
}