// console.log("Running ....");

// let name1;  // Initialization
// name1 = "syed ibad"  // declaration / assignment

// console.log(name1)

// let name = "ibad"; // intialization + declaration

// console.log(name);

// let age = 21;

// console.log("before changing : ", age);

// age = 22; // re-declaration / re-assignment

// console.log("after changing : ", age);

// const name = "ibad";
// name = "syed";

// ======== Operators =========

// Arithmetic Operators

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);

// Comparison Operators
// console.log(a > b)
// console.log(a < b)
// console.log(a >= b)
// console.log(a <= b)
// console.log(a != b)

// let a = 20;
// let b = 20;

// Equality Operators
// console.log(a == b)
// console.log(a === b)

// let a = true;
// let b = true;

// Logical Operators
// console.log(a || b)
// console.log(a && b)
// console.log(!a)

// Type Operators

// let age = 10;
// let name = "bano qabil"
// let condition = true;
// let obj = {
//     name : "Syed Ibad Ali"
// }

// let array = [10,20,30]

// console.log(typeof age)
// console.log(typeof name)
// console.log(typeof condition)
// console.log(typeof obj)

// console.log(typeof array);
// console.log(typeof null);
// console.log(typeof undefined);

// Conditional Statements

// let rain = false;

// if(rain == true){
//     console.log("Bahir nhi jana !!!")
// } else {
//     console.log("Ghar Chalo !!")
// }

// let age = 9;

// if (age >= 18) {
//   console.log("Eligible for vote");
// } else if (age > 10 && age < 18){
//     console.log("Marzi hai !!!")
// } else {
//   console.log("Not eligible for vote");
// }

// let num = 10;
// let guessingNum = 10;

// if(guessingNum > num){
//     console.log("Guess lower !!!")
// } else if (guessingNum < num){
//     console.log("Guess higher !!!")
// } else {
//     console.log("Congratulations !!")
// }

// let num = 11;

// if(num % 2 == 0){
//     console.log("even")
// } else {
//     console.log("odd")
// }

const temperature = 34;

switch (true) {
  case 0:
  case 10:
    console.log("Too cold");
    break;
  case 11:
  case 20:
    console.log("Cold");
    break;
  case temperature > 30 && temperature < 40:
    console.log("Too hot");
    break;
  default:
    console.log("Moderate");
}
