/* filename: bookpage.js
	 created: 2/4/16 
	 created by: Marisa Kanemoto | mkanemoto@ucsd.edu */

var books = require("../books.json");

function initializePage() {
	console.log("JavaScript active!");
}

exports.view = function(req, res){
	console.log(books);
	res.render('bookpage', books);
};