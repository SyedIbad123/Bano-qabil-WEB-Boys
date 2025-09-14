// for(let i = 1; i<= 10 ; i++){
//     console.log(i);
// }

// break and continue
// let i = 1;
// while (i <= 10) {
//     if(i == 5){
//         continue;
//         i++;
//     } else {
//         console.log(i)
//         i++;
//     }
// }

// for(let i = 1; i< 10; i++){
//     if(i == 5){
//         continue
//     } else {
//         console.log(i)
//     }
// }

// Functions

// function checkEvenAndOdd() {
//     let num = 1;

//   if (num % 2 == 0) {
//     console.log("Even");
//   } else {
//     console.log("odd");
//   }
// }

// checkEvenAndOdd();

// parameters and arguments

// function checkEvenAndOdd(start, end= 20 ) {
//   for (let i = start; i <= end; i++) {
//     if (i % 2 == 0) {
//       console.log("Even : ", i);
//     } else {
//       console.log("Odd : ", i);
//     }
//   }
// }

// checkEvenAndOdd(10);

// function checkEvenAndOdd(start = 1, end = 10) {
//   let even = [];
//   let odd = [];

//   for (let i = start; i <= end; i++) {
//     if (i % 2 == 0) {
//       even.push(i);
//     } else {
//       odd.push(i);
//     }
//   }
//   console.log("Even : ", even);
//   console.log("Odd : ", odd);
// }

// checkEvenAndOdd(1, 100)

function calculator(operator, num1, num2) {
  switch (true) {
    case operator == "+":
    case operator == "add":
      console.log(num1 + num2);
      break;
    case operator == "-":
      console.log(num1 - num2);
      break;
    case operator == "*":
      console.log(num1 * num2);
      break;
    case operator == "/":
      console.log(num1 / num2);
      break;
    default:
      console.log("Invalid Operator");
  }
}

calculator("Add", [1,2,3,4,5]);
