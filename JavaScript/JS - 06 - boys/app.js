// const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const btn2 = document.querySelectorAll(".btn");

console.log(btn2);

// console.log(body);

// btn.addEventListener("click", () => {
//   // console.log(btn);
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
  // if (btn == btn2[2]) return null;
  btn.addEventListener("click", () => {
    const red1 = Math.floor(Math.random() * 100);
    const green1 = Math.floor(Math.random() * 100);
    const blue1 = Math.floor(Math.random() * 100);

    const red2 = Math.floor(Math.random() * 256);
    const green2 = Math.floor(Math.random() * 256);
    const blue2 = Math.floor(Math.random() * 256);

    console.log({
      red1,
      green1,
      blue1,
    });

    console.log({
      red2,
      green2,
      blue2,
    });

    body.style.background = `linear-gradient(to right, rgb(${red1}, ${green1}, ${blue1}), rgb(${red2}, ${green2}, ${blue2}))`;
  });
});
