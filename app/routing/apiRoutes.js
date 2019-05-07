var friends = require('../data/friends')

module.exports = function(app){

    app.get('/api/data/friends', function(req,res){
        res.json(friends)
    })

    app.post('/api/data/friends', function(req, res) {
		var userInput = req.body;
		// console.log('userInput = ' + JSON.stringify(userInput));

		var userResponses = userInput.scores;
		// console.log('userResponses = ' + userResponses);?

		var matchName = '';
		var totalDifference = 10000; // Make the initial value big for comparison

		// Examine all existing friends in the list
		for (var i = 0; i < friends.length; i++) {
			// console.log('friend = ' + JSON.stringify(friends[i]));

			// Compute differenes for each question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}
			// console.log('diff = ' + diff);

			// If lowest difference, record the friend match
			if (diff < totalDifference) {
				 console.log('Closest match found = ' + diff);
				 console.log('Friend name = ' + friends[i].name);

				totalDifference = diff;
                matchName = friends[i].name;
                matchPic = friends[i].picture;
			}
		}

		// Add new user
        userInput.matchName = matchName
        userInput.totalDifference = totalDifference
        userInput.matchPic = matchPic
        friends.push(userInput);
        console.log(userInput)
		// Send appropriate response
		res.json({
            matchName, 
            totalDifference
        }
       );
	});
}