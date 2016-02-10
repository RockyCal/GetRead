// COMING SOON: general books data



var books = require('../books.json');


exports.testRouting = function(req, res) {
	console.log('Routing is working. Yay!');
	res.render('index', books);

}