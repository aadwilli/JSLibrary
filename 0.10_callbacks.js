var fs = require('fs');

function getBeers(filepath, done){
	fs.readFile(filepath, function(err, beers){
		if (err) return done(err);

		fs.readFile('0.10_beers.dictionary', function(err, dict){
			if (err) return done(err);

			compareBeers(beers, dict);
		})
	})

	var compareBeers = function(beers, dict){
		dict = dict.toString().split('\n');
		beers = beers.toString().split('\n').filter(function(beers){
			return dict.indexOf(beers) !== -1;
		})
		done(beers);
	}
}

getBeers('0.10_beers.txt', function(beers){
	console.log(beers);
})