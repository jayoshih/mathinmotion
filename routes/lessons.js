var videos = require('../videos.json');

exports.view = function(req, res){
	res.render('lessons', videos);
};

exports.lesson = function(req, res){
	var id = req.params.id;
	res.render('learn', videos["videos"][id]);
};