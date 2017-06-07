//Conditionals

/*
Boolean Operators
------------------
	> Greater Than
	< Less Than
	>= Greater or Equal
	<= Less than or equal
	== equal to
	=== strictly equal to
	! not
	!= not equal to
*/

console.log(1 > 3);
console.log(10 != 10);
var name = "Aaron";
console.log(name == "aaron");
console.log(6 == "6");
console.log(6 === "6");

//if statements
/*if ( boolean expression ){
	//somecode goes here
}
*/

if (242 % 2 == 0) {
	console.log("this number is even");
}

var userName = "admin";
var password = "test123";

if (userName == "admin" && password == "test123") {
	console.log("you have been granted access!");
} else { if (userName == "admin") {
	console.log("Incorrect password")
} else {
	//challenge check if user name is wrong value or the password
	console.log("Incorrect user info");
	}
}

/*
Chaining boolean expression
-----------------------------
	&& and
	|| or
*/


/*
if (boolean expression){
	//some code goes here
} else if (boolean expression) {
	//some code goes here
} else {
	//catch all
}
*/

var age = 20;

if (age >= 35){
	console.log("You can vote and also hold and place in gov.");
} else if (age >= 25) {
	console.log("You can vote and run for senate");
} else if (age >= 18) {
	console.log("You can vote")
} else {
	console.log("You're out of luck")
}

var coltsWin = 1;
var patsWin = 3;

if (coltsWin > patsWin){
	console.log("Eat it!");
} else if (coltsWin < patsWin){
	console.log("Yo mama");
} else if (coltsWin == patsWin){
	console.log("Awkward")
} else {
	console.log("Whelp");
}

for (var i=1; i <= 100; i++) {
    if (i % 15 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0){
        console.log("Fizz");
    } else if (i % 5 == 0){
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
