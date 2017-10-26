var friendsArray = require("../data/friends.js");

module.exports = function(app){
	app.get("/api/friends", function(req, res) {
		res.json(friendsArray);
	});

	app.post("/api/friends", function(req, res) {
		var newScores = req.body.scores;
		var scoresArray = [];
		var friendCount = 0;
		var bestMatch = 0;

		for (var i = 0; i < friendsArray.length;  i++) {
			var scoreDiff = 0;

		for (var j = 0; j < newScores.length; j++) {
			scoreDiff += (math.abs(parseInt(friendsArray[i].socres[j]) - parseInt(newScores[j])));
		}	

		scoresArray.push(scoreDiff);
		}


		for (var i = 0; i < scoresArray.length; i++) {
			if (scoresArray[i] <= scoresArray[bestMatch]) {
				bestMatch = i;
			}
		}

		var bestFriend = friendsArray[bestMatch];
		res.json(bestFriend);

		friendsArray.push(req.body);
	});
}

