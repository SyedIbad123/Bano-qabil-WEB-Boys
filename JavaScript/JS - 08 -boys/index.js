// Error handling

// try {
//   const num1 = 1;
//   const num2 = 0;

//   if(num2 == 0){
//     throw new Error("Zero is not allowed!")
//   }

//   console.log(num1/num2)
// } catch (e) {
//     console.error("Error : ", e)
// }

// let num1 = 1;
// let num2 = 1;

// if (num2 == 0) {
//   console.error("Error : Zero is not allowed");
// } else {
//   console.log(num1 / num2);
// }

// try {
//   console.log("Outer try starts...");

//   try {
//     console.log("Inner try starts...");
//     let x = 10 / 0;
//     let y = undefinedVariable;
//   } catch (innerError) {
//     console.error("Inner catch: " + innerError.message);
//   } finally {
//     console.log("Inner finally block executed.");
//   }

//   let z = JSON.parse("{ invalid json }");
// } catch (outerError) {
//   console.error("Outer catch: " + outerError.message);
// } finally {
//   console.log("Outer finally block executed.");
// }

//  Callback functions

// function greet(name, age, good) {
//   console.log("Hello, " + name);
//   age();
//   good()
// }

// function sayGoodbye() {
//   console.log("Goodbye!");
// }

// function sayGoodMorning(){
//     console.log("Good Morning!")
// }

// greet("Ali", sayGoodbye, sayGoodMorning);

// destructuring

// const numbers = [10,20,30];

// // console.log(numbers[0])

// const [a,b,c] = numbers;

// console.log(a);
// // console.log(b);
// // console.log(c);

const numbers = [10, 20, 30, 40, 50, 60, 70, 80];

// const [a,,c] = numbers;

// console.log(a)
// console.log(c)

// const [a, b, c, d = 40] = numbers;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

const [a,b,...rest] = numbers;

const last = rest[rest.length - 2]
const first = rest[0]

// const last = rest.at(-3)

console.log(last)
console.log(first)