// console.log("running");

// for(let i = 1 ; i <=10 ; i++){
//     console.log("hello")
// }

// let i = 0;
// while(i<10){
//     console.log("hello")
//     i++;
// }

// let i = 0;
// do{
//     console.log("hello")
//     i++;
// } while(i<0)

// break and continue

// for (let i = 1; i <= 10; i++) {
//     if(i == 5){
//         continue;
//     } else {
//         console.log(i)
//     }
// }

// for (let i = 1; i <= 10; i++) {
//   if (i > 5) {
//     break;
//   } else{
//     console.log(i)
//   }
// }

// let temp = 20;

// switch(temp){
//     case 10:
//         console.log("Cold")
//         break;
//     case 0:
//         console.log("Too Cold")
//         break;
//     case 30:
//         console.log("Too hot")
//         break;
//     default:
//         console.log("Temperature is not in range")
// }

// Functions

//  1 : Function keyword
// Syntax : function functionName(parameters){}

// function checkEvenAndOdd(){
//     let num = 0;
//     if(num % 2 == 0){
//         console.log("even");
//     } else {
//         console.log("odd")
//     }
// }

// checkEvenAndOdd()

// Function parameters and arguments

// function checkEvenAndOdd(start, end) {
//   for (let i = start; i <= end; i++) {
//     if (i % 2 == 0) {
//       console.log("even : ", i);
//     }else {
//         console.log("odd : ", i)
//     }
//   }
// }

// checkEvenAndOdd(54,100);

// function checkEvenAndOdd(start, end) {
//   let even = [];
//   let odd = [];

//   for (let i = start; i <= end; i++) {
//     if (i % 2 == 0) {
//         even.push(i);
//     }else {
//         odd.push(i);
//     }
//   }

//   console.log("Array of even : ", even)
//   console.log("Array of odd : ", odd);
// }

// checkEvenAndOdd(0, 20);

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

calculator("Add", 2, 100);
