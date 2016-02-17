var user = require('../users.json');

exports.view = function(req,res){
	res.render('signUp')
}

exports.login = function(req, res) {
	res.render('login');
}