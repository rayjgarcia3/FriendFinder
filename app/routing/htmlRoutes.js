var path = require("path");

module.exports = function(app){
//survey	
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/survey.html"));
	});

//home
	app.get("/", function (req, res) {
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	});
};