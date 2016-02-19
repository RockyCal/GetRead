/*  filename: GetRead/routes/friends.js
	created: 2/18/16 
	created by: Marisa, who really hopes she's doing this right */

var users = require('../users.json');
//var friends = users["friends"];  //this notation is incorrect

exports.view = function(req, res) {
	res.render('friends');
}