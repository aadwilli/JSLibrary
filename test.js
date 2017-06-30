//Write a function that accepts two names as parameters and then returns or console.logs 
//the full name by implementing concatenation.
//Example: greeting(“Paul”, “O’Connor”) - should console log / return Paul O’Connor
function name(firstName, lastName){
	console.log("Hello " + firstName + " " + lastName);
}
name("Aaron", "Williamson")

//Write a function that accepts two numbers as parameters and 
//then returns or console.logs the product of them.
//Example: multiply(2, 2) should return / console.log 4
function num(numOne, numTwo){
	console.log(numOne * numTwo);
}
num(8, 9)

//Create an object literal called user.  Inside this object create a username and password 
//parameter.  Also, create a function call isLoggedIn that console logs or returns logged in.
var user = {
	username: "Han Solo",
	password: "wookie123",
	isLoggedIn : function () {
		console.log("User is logged in");
	}
}
console.log(user.username);
user.isLoggedIn();

//Create a for loop that that starts at zero and ends at 20, but counts by 2’s. 
for (i = 0; i <= 20; i += 2){
	console.log(i);
}
//while loop doing the same
var i = -2;
while (i < 20){
	i += 2;
	console.log(i);
}




