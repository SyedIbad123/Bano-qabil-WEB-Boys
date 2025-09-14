// const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const btn2 = document.querySelectorAll(".btn");

console.log(btn2);
// console.log(body);

// btn.addEventListener("click", () => {
//   console.log(btn);
//   body.style.backgroundColor = "#000000";
// });

// random color changing on button click
// btn.addEventListener("click", () => {
//     const red = Math.floor(Math.random()* 256);
//     const green = Math.floor(Math.random()* 256);
//     const blue = Math.floor(Math.random()* 256);

//     body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
// });

// for multiple buttons

btn2.forEach((btn) => {
  if (btn == btn2[2]) return null;
  btn.addEventListener("click", () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  });
});
