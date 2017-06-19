var fs = require('fs');

/*
	request = prepare_the_request();
	send_request_asychronously (request, function(response){
		display(response);
	})

*/
// getBulls([path], callback) like on line 40
function getBulls(filepath, done){
	//telling file system to read a file that the user of the function passes into
	//as an argument. Then we are creating a callback to handle that case.
	fs.readFile(filepath, function(err, bulls){
		//error handling 
		if (err) return done(err);

		fs.readFile('0.09_bulls.dictionary', function(err, dict){
			//error handling
			if (err) return done(err);

			compareBulls(bulls, dict);
		})
	})
//variable way of writing functions
	var compareBulls = function (bulls, dict){
	//turn the items from these files into arrays then split them
	dict = dict.toString().split('\n');
	bulls = bulls.toString().split('\n').filter(function(bulls){
		//going over the dictionary, then it's checking if the bulls are Located
		//inside of the dictionary. If it is, then it's returning that value
		return dict.indexOf(bulls) !== -1
	})
	done(bulls);
	}
}



getBulls('0.09_bulls.txt', function(bulls){
	// if (err) return done(err);

	console.log(bulls);
})
//Another example of callback

console.log("Hey tell me your name?");
var printNameInThreeSeconds = setTimeout(function(){
	console.log("Bryce");
}, 3000);
console.log("Nice to meet you!");


