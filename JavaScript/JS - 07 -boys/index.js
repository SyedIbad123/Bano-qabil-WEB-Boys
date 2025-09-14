// const name = "123456.2434";

// // const num = Number(name)
// // const num2 = parseInt(name)
// const num3 = parseFloat(name)

// // console.log(num); // 123456
// // console.log(typeof num); // number

// // console.log(num2); // 123456
// // console.log(typeof num2); // number

// console.log(num3); // 123456.2434
// console.log(typeof num3); // number

// const num = 123456.789;

// const str = String(num);
// const str2 = num.toString();

// console.log(str); // "123456.789"
// console.log(typeof str); // "string"

// console.log(str2); // "123456.789"
// console.log(typeof str2); // "string"

// const arr = [1, 2, 3, 4, 5];

// for(let i in arr){
//     console.log(arr[i])
// }

// for(let i of arr){
//     console.log(i)
// }

// function declaration

// function add(a, b) {
//     return a + b;
// }

// console.log(add(2, 3)); // 5

// // function expression

// const subtract = function(a, b) {
//     return a - b;
// }

// console.log(subtract(5, 2)); // 3

// arrow function

// const multiply = (a, b) => {
//   return a * b;
// };

// console.log(multiply(2, 3)); // 6

//  Array methods

const arr = [1, 2, 3, 4, 5];

// const arr2 = arr.push(6);

// console.log(arr); // [1, 2, 3, 4, 5, 6]

// arr.pop();

// console.log(arr); // [1, 2, 3, 4, 5, 6]

// arr.unshift(10034883098);

// console.log(arr); // [0, 1, 2, 3, 4, 5, 6]

// arr.shift();

console.log(arr); // [1, 2, 3, 4, 5, 6]

// const newArr = arr.map((item) => item * 2);

// console.log(newArr); // [2, 4, 6, 8, 10, 12]

// const newArr = arr.filter((item) => item % 2 !== 0);

// console.log(newArr); // [1, 3, 5]

// const sum = arr.reduce((acc, item) => acc + item, 0);

// console.log(sum);

// const spliced = arr.splice(2, 0, 100, 200, 300);

// console.log(arr);

//  Inline event handler in HTML


function clickHandler() {
  alert("Heading clicked!");
}
