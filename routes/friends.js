/*  filename: GetRead/routes/friends.js
	created: 2/18/16 
	created by: Marisa, who really hopes she's doing this right */

var users = require('../users.json');
var usersArr = users["users"];
var friends = usersArr[0].friends;  

exports.view = function(req, res) {
	res.render('friends', friends);
}

/* helper function to find users given only their username */
function findUserByUsername(username){
	var friends = friends;
	var uname = username;
	for (i = 0; i < users.length; i++) {
		if (friends[i].hasOwnProperty("username") && friends[i]["username"] === uname) {
			var thisFriend = friends[i];
			return thisFriend;
		}
	}
}

/* function to return information for each friend */
function friendInfo(username) {
	var thisFriend = findUserByUsername(username);
	var username = thisFriend.username;
	var fullName = thisFriend.fullName;
	var profPic = thisFriend.profPic;
}