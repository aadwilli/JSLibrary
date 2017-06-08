//Functions


/* 

	function Name_of_Function(){
	
	}
*/
//Declaring the function
function greeting(){
	var name = "Patrick"; //variable is local. Removing var from the line will hoist the variable
	console.log(name +" says \"Helloooo Vietnam!\"");
}
//calling the function
greeting();
//Challenge declare a function that prints the weather to the console
//Then call that function
function weather(){
	var forecast = "Sunny";
	console.log("Today the weather is: " + forecast);
}
weather();
//functions with parameters

function shoes(brand){
	console.log("Man those " + brand + " are on fleek!")
}
shoes("Crocs");
//functions with multiple parameters
function add(num1, num2){
	console.log(num1 + num2);
}

add(34,66);

//functions that return data
function sum(num1, num2) {
	return num1 + num2;
}
var answerToQuestion = sum(23,17);
//create functions that returns the answerfor subtracting, mul, div, and mod 2 numbers

function sub(num1, num2) {
	return num1 - num2;
}
function mul(num1, num2) {
	return num1 * num2;
}
function div(num1, num2) {
	return num1 / num2;
}
function mod(num1, num2) {
	return num1 % num2;
}

function name(first, last) {
	console.log(first + last);
}
name("Aaron", "Williamson");

function bills(water, power, phone){
	return water + power + phone;
}
var billsTotal = bills(200, 300, 400);
console.log("Monthly bills total: " + billsTotal);

function soda(amount, price, tax) {
	var total = amount * (price + (tax * .01));
	return (amount + " sodas will cost you " + total);
}

console.log(soda(100, .99, 7));




