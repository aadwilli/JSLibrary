//Objects

var empObject = {};
//object literal
var johnQualls = {
//   Key      : Value
	name 	  : "John Qualls", //have to put comma in 
	age 	  : 39,
	hairColor : "Brown",
};

console.log(johnQualls);
console.log(johnQualls.name); //dot operator grabs whatever is in front and grabs property from it
console.log(johnQualls.name + " is of the age " + johnQualls.age);

johnQualls.height = "6ft";

console.log(johnQualls.height);
console.log(johnQualls);
//create an animal object with the properties of type, weight, commonInIndiana and habitat
var animal = {
	type			: "bear",
	weight			: 500,
	commonInIndiana : false,
	habitat 		: "100 acre woods",
};

console.log(animal["habitat"]);
animal["nickName"] = "Winnie";

console.log(animal["nickName"] + " lives in " + animal["habitat"]);

//reassigning vales
animal.type = "moose"
console.log(animal.type);

//change the weight of the animal property using square bracket notation
//then add a new array property of moviesAboutMe rocky & bullwinkle, Monty Python, 
//National Lampoon's Vacation

animal.weight = 600;
console.log(animal["weight"]);
animal.moviesAboutMe = ["Rocky & Bullwinkle", "Monty Python", "National Lampoon's Vacation"];
console.log(animal)
console.log(Object.keys(animal))

//Objects with methods

var theBryceIsRight = {
	name 	 : "Bryce Greene",
	age  	 : 20,
	vocation : "TA",
	email 	 : "thebryceisright@gmail.com",
	greeting : function(){
					return "Greetings earthlings I am " + this.name + " I am here to learn you.";
			   },
	//creat a method for contactMe and include the email property in a return statement
	contactMe : function(){
					return this.email + " to contact me";
			   },
	//create a method that calls both of the methods above
	doBoth 	 : function (){
					console.log(this.greeting());
					console.log(this.contactMe());
			   },
}

console.log(theBryceIsRight.greeting);
theBryceIsRight.greeting();
console.log(theBryceIsRight.greeting());
console.log(theBryceIsRight.contactMe());
theBryceIsRight.doBoth();

//object constructors
var paul = new Object;
var james = {}
paul.name = "Paul O'Connor";
paul.vocation = "Curriculum Master";
paul.hobbies = ["rocking out code", "listening to good music", "baking banana muffins"];
//object constructor template

function Hotel(name, rooms, booked){
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.checkAvaliability = function (){
		return "There are " + (this.rooms - this.booked) + " rooms left."
	};
}

var jw = new Hotel("JW Marriot", 300, 250);
var jwExp = new Hotel("Mini J'Dubs", 100, 50);
//creating an array of hotels
var hotels = [ jw, jwExp];
console.log(hotels);
//grabbing specific properties
console.log(hotels[1].name);
//grabbing specific properties 
for (var h in hotels){
	console.log(hotels[h].name)
}

console.log(jwExp.checkAvaliability());

// BRONZE: 
// Create a person object with different properties describing them.
var aadWilli = {
	name 	: "Aaron",
	height  : "5'4",
	weight  : 155,
	getName : function (){
		return this.name + " is my name"
	},
	getHeight : function (){
		return "My height is " + this.height
	},
	getWeight : function (){
		return "I weigh " + this.weight
	},
}
console.log(aadWilli);
// SILVER:
// Add methods for each of the properties above that returns the value of the property(I.E. getName() returns the name).
// GOLD:
// Create a child object that inherits all of the properties and methods from your person object.
// Add anything you want to the child object, without adding it to the person.
var child = Object.create(aadWilli)
console.log(child) //????????

// Create 5 person objects with attributes: name, age, favoriteShows[] (Array with at least 5 elements)
// THE FOLLOWING FOUR LINES ARE TO BE FUNCTIONS IN EACH PERSON OBJECT
// Create a function called birthday that adds one to their age.
// Create a function that takes in person looks at their favorite shows, then prints out the shows they have in common.
// 	If there are no shows in common print "No shows in common"
// Create a function that prints out "Hello, my name is *** and I am *** years old, and one of my favorite shows is " 
// and then gives a random show from their list of shows
function Person(name, age, favoriteShows){
	this.name = name;
	this.age = age;
	this.favoriteShows = favoriteShows;
	this.birthday = function (){
		return (this.age + 1)
	};
	this.compareShows = function (nam2){
		var commShows = []
		for (var i = 0; i < this.favoriteShows.length; i++){
			for (var k = 0; k < nam2.favoriteShows.length; k++){
				if (this.favoriteShows[i] == nam2.favoriteShows[k]){
					commShows.push(this.favoriteShows[i])
				}
			}
		} 
		if (commShows.length === 0){
			return "No shows in common"
		}


		return commShows
	}
}
var aaron = new Person("Aaron", 36, ["A", "B", "C", "D", "E"]);
var care = new Person("Care", 27, ["A", "B", "C", "F", "G"]);
var vik = new Person("Vik", 10, ["H", "I", "J", "K", "L"]);
var hen = new Person("Hen", 7, ["H", "I", "J", "K", "L"]);
var gideon = new Person("Gideon", 20, ["M", "B", "F", "G", "E"]);

console.log(aaron.compareShows(vik))
// Create an array full of all the created persons. 
// Create an array of 10 shows
// Create a function that creates a person object.
// 	This function takes in name and age
// 	Populates the favoriteShows array with 5 random shows pulled from the shows array
// 	Includes the functions for person defined above.
	
// Write a function that generates 5 people with random names (5 letters) and random ages(between 1 and 50)
// 	then adds them all to the existing array full of people


// Create a function that takes in an array and removes anyone with a name beginning with a vowel

// Create a function that takes in an array and returns the oldest person

// Create a function that takes in an array and returns an array of people in order from youngest to oldest

// Create a function that takes in an array and returns an array of people in order from oldest to youngest

// Create a function that takes in an array and returns an array with three arrays
// 	The first array is people under 20 
// 	The second is with people 20 and over, but not 35 
// 	The third is with anyone who is 35

// Create a function that takes in an array of people and returns an array the people in alphabetical order. 







