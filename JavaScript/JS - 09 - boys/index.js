// console.log("Running!");

// Promises

// const myPromise = new Promise((karrar, wajid) => {
//     let achiBiryani = 10;
//     if(achiBiryani !== 10){
//         wajid("Promise rejected!")
//     } else {
//         karrar("Promise resolve!")
//     }
// });

// myPromise.then((result)=>{
//     console.log(result)
//     console.log(2+2)
// }).catch((error)=>{
//     console.error(error)
//     console.log(2+2)
// })

// Promise Chaining

// const fetchData = new Promise((resolve) => {
//   resolve(10);
// });

// fetchData
//   .then(num => num * 2)
//   .then(num => num + 5)
//   .then(num => console.log(num));

// Promise.all

// const p1 = Promise.resolve("First");
// const p2 = new Promise(resolve => setTimeout(() => resolve("Second"), 10000));
// const p3 = Promise.resolve("Third");

// Promise.all([p1, p2, p3]).then(values => {
//   console.log(values); // ["First", "Second", "Third"]
// });

//  Promise Race

const fast = new Promise((resolve) => setTimeout(() => resolve("Fast"), 1000));
const slow = new Promise((resolve) => setTimeout(() => resolve("Slow"), 3000));

Promise.race([fast, slow]).then((result) => {
  console.log(result); // "Fast"
});
