
// Declaration
//var name;
//console.log(name); // Will show as undefined because variable is declared but not defined yet
// Initialization
// Data Type of String
// name = "Aaron";

// console.log(name);

// console.log(true);

// console.log(1+1);


var firstName = "Aaron"
var lastName = "Williamson"
// Concatenation
console.log(firstName + " " + lastName);

// Challenge write out your address in 3 variables street, state, zip 
//then add them together and print them out to the console

var street = "123 Fake Street";
var state = "Indiana";
var zip = 46219;
console.log(street + " \n" + state + " " + zip);

console.log("Aaron says, \"Why hello there\" ");
console.log('Aaron says, "Why hello there" ');

var isAwake = true;
var rainy = false;
// var true = "hey you guys!!"; // this is a no-no

console.log(isAwake);
console.log(rainy);

/*
+ addition
- subtraction
* multiplication
\ divison
% modulus
= assignment
","" seperates into two arguments "+"" combines 2 into 1 
*/

console.log( "The answer to 10 % 3 is: " , 10 % 3);
console.log(typeof( "The answer to 10 % 3 is: " , 10 % 3))

var age = 35;
var phone = 3173173173;
var children = 3;
var zip = 46229;
var bankAccount = 000000112;

console.log("My age is " + age);
console.log("My number is " + phone);
console.log("I have " + children + " children");
console.log(zip + " is my zip code");
console.log("Bank account number: " + bankAccount);

var myNumber = 0;
myNumber = myNumber + 10;
console.log(myNumber);
myNumber =  -- myNumber ;
console.log(myNumber);
myNumber = myNumber * 9;
console.log(myNumber);
myNumber = myNumber / 7;
console.log(myNumber);

var curAge = 36
var maxAge = 200
var amountPerDay = 10
var totAmount = ((maxAge - curAge) * amountPerDay)
console.log("You will need " + totAmount + " sodas until the age of " + maxAge);
