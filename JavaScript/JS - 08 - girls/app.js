// array methods

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// list.push(5); // add to end

// console.log(list);

// list.pop(); // remove from end

// console.log(list);

// list.unshift(0); // add to start

// console.log(list);

// list.shift(); // remove from start

// console.log(list);

// const newList = list.map((x) => x); // create new array by transforming each element

// console.log(list);

// console.log(newList);

// const filtered = list.filter((x) => x !== 5); // create new array with elements that pass the test

// console.log(list);

// console.log(filtered);

// try..catch

// try {
//   const num1 = 1;
//   const num2 = 2;

//   if (num2 == 0) {
//     throw new Error("Division by zero is not allowed!");
//   }
//   console.log(num1 / num2);
// } catch (e) {
//   console.error("Caught an error : ", e);
// }

// const num1 = 1;
// const num2 = 4;

// if (num2 == 0) {
//   console.error("Division by zero is not allowed!");
// } else {
//   console.log(num1 / num2);
// }

//  callback functions

function greet(name, callback1, callback2) {
  console.log("Hello : ", name);
  callback2();
  callback1();
}

function sayGoodBye() {
  console.log("Goodbye!");
}

function sayGoodMorning(){
    console.log("GoodMorning!")
}

greet("Ali", sayGoodBye, sayGoodMorning);
