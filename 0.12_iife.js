/*
	iffe = Immediatly-Invoked Function expression
	these are self-contained and cannot be called later
	semi-colons are absolutely neccessary in these instances.
	for example, if there was a var declared above the printNum iife, make sure to have ; afterwards
*/

(function printNum(){
	var a = 5;
	console.log(a);
})();
//the () at the end makes it run the function immediately after being read
//instead of having to call the function later

function printName(){
	var name = "John";
	console.log(name)
}

printName();

//create an iife that counts from 1-10

(function countNum(){
	for(i=0; i<10; i++)
	console.log((i) + 1);
})();

var smartCar = {};
var smartCarMPG = function(totalMiles, totalGallons){
	return{
		calculateMpg : function(){
			console.log("MPG: " + "Total Miles:" + totalMiles + " Total Gallons:" + totalGallons);
			return totalMiles / totalGallons;
		}
	};
};

smartCar.mpg = smartCarMPG(45, 15);
console.log(smartCar.mpg);
console.log(smartCar.mpg.calculateMpg());