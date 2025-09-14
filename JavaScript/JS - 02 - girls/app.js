// console.log("bano qabil")

// initialization, declaration, assignment and redeclaration
// let name;  // initialization
// name = "ibad";  // assignment / declaration

// let name2 = "ibad"; // initialization + assignment / declaration

// const name = "ibad";

// console.log(name);
// console.log(name2);

// redaclaration

// let age = 21;
// console.log("before changing : ", age);

// age = 20; // re-assignment / redeclaration

// console.log("after changing : ", age);

// const name = "ibad";
// name = "syed"; // error: Assignment to constant variable

// ============== Operators =================

// Arithmetic Operators
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a ** b);
// console.log(a % b);

// Equality Operators
// console.log(a==b);
// console.log(a===b);

// Comparison Opertors

// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a != b);

// let a = 2;
// let b = 2;

// Logical Operators

// let c = true;

// console.log(a>=b || a<b)
// console.log(a>=b && a<=b)
// console.log(!c)

// Type Operators

// let a = 10;
// let name = "ibad"
// let boolean = true

// let obj = {
//     name:"ibad"
// }

// let array = [10,20,30]

// console.log(typeof a);
// console.log(typeof name);
// console.log(typeof boolean);
// console.log(typeof obj);
// console.log(typeof array);
// console.log(typeof null);
// console.log(typeof undefined)

// Conditional Statements

// let age = 9;

// if (age >= 18) {
//   console.log("Eligible for vote");
// } else if (age < 18 && age > 10) {
//   console.log("Marzi hai!!!!");
// } else {
//   console.log("Not Eligible for vote");
// }

const num = 10;
const guessingNum = 10;

if (guessingNum < num) {
  console.log("Guess higher !!!");
} else if (guessingNum > num) {
  console.log("Guess Lower !!!");
} else {
  console.log("Congratulations !!!");
}
