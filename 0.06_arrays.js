// //Arrays
// //[]
// //                   0         1      2        3        4
// var students = ["Harrison", "Rose", "Ben", "Caitlyn", "Kay"];

// console.log(students[2]);

// students[5] = "Nick";
// console.log(students);

// students.push("Aaron");
// console.log(students);

// students.pop();
// console.log(students);

// //For Each Loop

// for (var s in students){
// 	console.log(students[s])
// }
// // ^ is an easier way of saying \/
// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);

// for (var s in students){
// 	var uppercase = students[s].toUpperCase();
// 	console.log(uppercase + " is in the position of: " + s)
// }

// //create an array of numbers 1 - 10 then use a for in Loop to print
// //to the console

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (var n in numbers){
// 	console.log(numbers[n]);
// }
// //create a for Loop that pushes numbers into a empty array
// var numArry = []
// for (var i = 1; i < 11; i++){
// 	console.log(i);
// 	numArry.push(i);
// 	console.log(numArry);
// }
// console.log(numArry)

// //Mixed arrays

// var ranThings = ["Bryce", 45, "Summer", true, []];
// console.log(ranThings);

// var favThings = ["fiance", "cats", "kids", "video games"];
// var cars = ["Toyota", "Honda", "Ford", "Chevy", "Nissan"];
// for (var i = 0; i < cars.length; i++){
// 	console.log(cars[i])
// }
// //Create an array where each element is an array of different lists.
// //(I.E. 0 is your cars, 1 is your pets, 2 is your children). 
// //Create a loop to print out every element.
// var liArry = [favThings, cars, ["Viktor", "Henry"]];
// for (var i = 0; i < liArry.length; i++){
//   for (var i in liArry){
//     for (var n in liArry[i]){
//       console.log(liArry[i][n]);
//     }
//   }
// }
// //This basically makes a table ex liArry[0][3] where 0 is the x axis and 3 is that y axis
// //for (var i in liArry){
// // 	for (var n in liArry[i]){
// // 		console.log(liArry[i][n])
// // 	}
// // }



// // Other Challenges:
 
// // Random number should be between 0 - 50
 
// // Create an array and fill it with 15 random numbers (Learn the random function)
// // Write code to determine how many prime numbers there are
// //random num challenge
// var ranNum = Math.floor(Math.random() * 50 + 1);
// console.log(ranNum);
var arr = [];
for (var i = 0; i < 15; i++) {
	var ranNum = Math.floor(Math.random() * 50 + 1);
    arr.push(ranNum);
} 
console.log(arr);

function isPrime(num){
	if (num < 2) {
		return false;
	} 
	var q = Math.floor(Math.sqrt(num));
    for (var i = 2; i <= q; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
var primes = [];
for (var i = 0; i < arr.length; i++){
	if(isPrime(arr[i])){ //implies if function evalutes to true
		primes.push(arr[i]);
	}
}
console.log(primes);
console.log(primes.length);


// Create an empty array
// With a loop, fill it with all integers between 5 and 45
// Iterate through the loop and remove all numbers that are multiples of 3 or 5
// Iterate through the loop and change all numbers that end in a 1 to 0

var numArr = [];
for (var i = 5; i <= 45; i++){
	if (i % 3 === 0 || i % 5 === 0){

	} else if (i == 11 || i == 31 || i == 41) {
		numArr.push(i - 1);
	} else {
	numArr.push(i);
	}
}
console.log(numArr);

var numArr = [];
for (var i = 5; i <= 45; i++){
 	if (i == 11 || i == 31 || i == 41) {
		numArr.push(i - 1);
	} else if (!(i % 3 === 0) && !(i % 5 === 0)){ 
		numArr.push(i);
	}
}
console.log(numArr);

// Create an array of 5 words
// Write code to create another array filled with 5 numbers
// Write code to create an array with 5 elements with a word and a number separated by a dash
var words = ["cat", "fiance", "code", "break", "line"];
var numNum = [2, 5, 10, 22, 36];
var wordNum = ["cat", 2, "word", 5, "car"];
console.log(wordNum.join('-'));

// Create an array with every letter in the alphabet 
// Write code to make an array of 5 words, each with 5 random letters
// (["jeodp", "bactg", "aqpvy", "bqwzs", "poebt", "xtser"])

//random num challenge
var ranNum = Math.floor(Math.random() * 50 + 1);
console.log(ranNum);
var arr = [];
for (var i = 0; i < 15; i++) {
	var ranNum = Math.floor(Math.random() * 50 + 1);
    arr.push(ranNum);
} 
console.log(arr);






//alpha challenge
function getRandomInt(min, max) {
 min = Math.ceil(min);
 max = Math.floor(max);
 return Math.floor(Math.random() * (max - min)) + min;
}//or use Math.floor((Math.random() * 10) + 1);

var alph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var rand = [];
var word = "";

for(bet = 0; bet <5; bet++){

    for(lett = 0; lett <5; lett++){

        word = word.concat(alph[(getRandomInt(1,27) - 1)]);

    }//end inside for

    rand.push(word);
    word = "";

}//end outside for

console.log(rand);


