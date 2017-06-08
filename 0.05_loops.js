//Loops

//4 types of loops: do while, while, for, for in

//do while loop: guarenteed to run at least one time
/*
LCV loop control variable

lcv = 0

do	{
	lcv = lcv + 1
	//some code goes here
} while(true || false)
*/


var lcv = 0;
do{
	lcv = lcv + 1;
	console.log(lcv);
} while(lcv < 6);
//create a do while loop that counts to 20 bby 2's
var i = 0
do {
  i = i + 2; //can also use i += 2 here
  console.log(i);
} while (i < 20);
//create a do while loop that counts down from 10 to 0
var i = 10
do {
  i = i - 1; //can also use i-- here
  console.log("counting down from 10: " + i);
} while (i > 0);

//while loop
/*
lcv = 0
while (true || false) {
	increment || decrement
}
*/

var counting = 0
while(counting < 50){
	counting += 5;
	console.log(counting);
}

//challenge create a countdown from 10 to 0 instead of zero print blast off
var i = 11
while(i > 0){
  i--;
  if (i == 0){
    console.log("Blast off!")
  } else {
	console.log(i)
  }
}

//For loop
/*
for (lcv = 0; true || false expression; increment || decrement){
	//code here
}
*/
for (apples = 0; apples < 10; apples++){
	console.log(apples);
};










