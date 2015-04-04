/*
 Name:       Eric (Avery) Birchard
 Course:     SDI
 Date:       3, April 2015
 Instructor: Dan Williams



//Calculate how old Sparky the pit bull is in dog years.

//Sparky's age

var ageDog; //initial age variable

var ageDog = prompt("What is Sparky's' age?");  //gathering input for dog age via user input
var ageDog = Number(ageDog);                    //Casting string to number
var age;                                        //variable for human years

var age = ageDog;  //putting human years variable into age for output of human years

ageDog = ageDog * 7; //calculation for dog years


alert("Sparky's' age in human years is" + " "   //user reads age in human years
+ age + " " + "\n" + "which is" + " "           //displays human years
+ ageDog + " " + "in dog years");               //user reads age in dog years

console.log("Sparky's age in dog years is:" + " " + ageDog + "\n"); //console log for dog years
console.log("Sparky's age in human years:" + " " + age);            //console log for human years


//Slice of pie I, no it's pizza.  Title is Pie.

//Party Pizza

var slicesPizza = prompt("How many slices of pizza are available?"); //variable for how many slices of pizza
var slicesPizza = Number(slicesPizza);

var numberPeople = prompt("Total number of people who want pizza?"); //variable for how many people
var numberPeople = Number(numberPeople);

var result = slicesPizza / numberPeople;                        //result of how many slices per person


alert("Slices of pizza available per person:" + " " + result);  //display result for how many slices per person


console.log("Slices per person available" + " " + result);      //console log how many slices per person

//Sparky's slices of pizza

var leftOvers = prompt("How many slices were eaten");           //Slices eaten
var leftOvers = Number(leftOvers);                              //Left overs as a number
console.log("Slices eaten" +" " + leftOvers);                   //Number of slices eaten


var leftOvers = slicesPizza - leftOvers;                                //Left Overs

alert("Sparky gets" + " " + leftOvers + " " + "slices of pizza");       //What Sparky got
console.log("Sparky got" + " " + leftOvers + " " + "slices of pizza");  //Logging what sparky got

    */

//Groceries

//5 totals of original price into array with description
var discount = .20;      //20% discount
var tax = .05;          //5% sales tax


//Groceries #1
var description1 = prompt("Item description week 1");   //item description
var cost1 = prompt("Total cost in week 1");             //total cost
var cost1 = Number(cost1);                              //casting
var discount1 = cost1 - (cost1 * discount);             //discount

console.log(description1 + " " + "before tax after discount" + " " + "$" +  "$" + discount1);    //before tax after discount

var aTax1 = discount1 * tax;                                                                    //after tax calculation
console.log("aTax1" + " " + aTax1);                                                             //logging tax

var aTaxFinal1 = discount1 - aTax1;                                                             //Final tax calc
console.log(description1 + " " + "Cost after tax and discount" + " " +  "$" + aTaxFinal1);      //after tax and discount logging



//Groceries #2
var description2 = prompt("Item description week 2");       //item description
var cost2 = prompt("Total cost in week 2");                 //total cost
var cost2 = Number(cost2);                                  //casting
var discount2 = cost2 - (cost2 * discount);                 //discount

console.log(description2 + " " + "before tax after discount" + " " +  "$" + discount2);     //before tax after discount

var aTax2 = discount2 * tax;                                                                //after tax calculation
console.log("aTax2" + " " + aTax2);                                                         //logging tax

var aTaxFinal2 = discount2 - aTax2;                                                             //Final tax calc
console.log(description2 + " " + "Cost after tax and discount" + " " +  "$" + aTaxFinal2);      //after tax and discount logging

//Groceries #3
var description3 = prompt("Item description week 3");       //item description
var cost3 = prompt("Total cost in week 3");                 //total cost
var cost3 = Number(cost3);                                  //casting
var discount3 = cost3 - (cost3 * discount);                 //discount

console.log(description3 + " " + "before tax after discount" + " " +  "$" + discount3);     //before tax after discount

var aTax3 = discount3 * tax;                                                                //after tax calculation
console.log("aTax3" + " " + aTax3);                                                         //logging tax

var aTaxFinal3 = discount3 - aTax3;                                                             //Final tax calc
console.log(description3 + " " + "Cost after tax and discount" + " " +  "$" + aTaxFinal3);      //after tax and discount logging


//Groceries #4
var description4 = prompt("Item description week 4");       //item description
var cost4 = prompt("Total cost in week 4");                 //total cost
var cost4 = Number(cost4);                                  //casting
var discount4 = cost4 - (cost4 * discount);                 //discount

console.log(description4 + " " + "before tax after discount" + " " +  "$" + discount4);    //before tax after discount

var aTax4 = discount4 * tax;                                                                //after tax calculation
console.log("aTax4" + " " + aTax4);                                                         //logging tax

var aTaxFinal4 = discount4 - aTax4;                                                             //Final tax calc
console.log(description4 + " " + "Cost after tax and discount" + " " +  "$" + aTaxFinal4);      //after tax and discount logging


//Groceries #5
var description5 = prompt("Item description week 5");           //item description
var cost5 = prompt("Total cost in week 5");                     //total cost
var cost5 = Number(cost5);                                      //casting
var discount5 = cost5 - (cost5 * discount);                     //discount

console.log(description5 + " " + "before tax after discount" + " " +  "$" + discount5);     //before tax after discount

var aTax5 = discount5 * tax;                                                                //after tax calculation
console.log("aTax5" + " " + aTax5);                                                         //logging tax

var aTaxFinal5 = discount5 - aTax5;                                                             //Final tax calc
console.log(description5 + " " + "Cost after tax and discount" + " " +  "$" + aTaxFinal5);      //after tax and discount logging


//Output for arrays







