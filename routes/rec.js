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
	var recommendations = data["recommendations"]
	res.render('recommendations', {'recommendations':recommendations});
}

exports.recBook = function(req, res) {
	var book = findBookByTitle(req.params.title);
	var to = req.params.to;
	if(book.recommended){
		book.recommended = false;
		var idx = recommendations.indexOf(book)
		recommendations.splice(idx, 1);
	}
	else{
		if(to){
			book.toFriend = false;
			book.to = to;
		}
		book.recommended = true;
		recommendations.push(book);
	}
	console.log(recommendations);
	res.json(book);
}