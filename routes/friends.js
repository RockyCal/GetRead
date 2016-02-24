/*  filename: GetRead/routes/friends.js
	created: 2/18/16 
	created by: Marisa, who really hopes she's doing this right */

var users = require('../users.json');
var usersArr = users["users"];
var friends = usersArr[0].friends;  

exports.view = function(req, res) {
	var usersFriends = [];
	for (i = 0; i < friends.length; i++) {
		console.log("friends: ")
		console.log(friends[i]);
		var thisFriend = findUserByUsername(friends[i].username);
		usersFriends.push(thisFriend);
	}
	console.log("usersFriends: ")
	console.log(usersFriends);
	res.render('friends', {'usersFriends':usersFriends});
}

/* helper function to find users given only their username */
function findUserByUsername(uname){
	var friends = friends;
	var uname = uname;
	for (i = 0; i < usersArr.length; i++) {
		if (usersArr[i].hasOwnProperty("username") && usersArr[i]["username"] === uname) {
			var thisFriend = usersArr[i];
			console.log("thisFriend: ")
			console.log(thisFriend);
			return thisFriend;
		}
	}
}