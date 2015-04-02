/*
Name:       Eric Avery Birchard
Course:     SDI
Date:       1, April 2015
Instructor: Dan Williams

 */

//numbers, strings, boolean--skipped, too basic
//declare before defining


var yearBorn = 1969;        //var string, declaring variables
var age;                    //age variable declared
var eAveryBirchard = true;  //boolean making eAveryBirchard true
var info = ["Avery", "was", "born", yearBorn]; //making array
info[4] = "end array";
age = 46                    //defining age

//or var yearBorn = 46

alert("testing alert for yearBorn\n" + " " + yearBorn + " " + age);

console.log("yearBorn variable \n" + " " + yearBorn + " " + age); //log yearBorn variable
console.log("eAveryBirchard value is \n" + " " + eAveryBirchard); //log eAveryBirchard value
console.log(info); //displaying array


//array access notation

console.log("Array access notation in position 3" + " " + info[3]);
console.log(info[4]);