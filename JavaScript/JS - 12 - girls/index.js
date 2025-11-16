//  Synchronous and Asynchronous programming

// const myPromise = new Promise((resolve, reject) => {
//   const bool = true;

//   if (bool) {
//     resolve("Promise resolved..");
//   }

//   reject("Promise reject");
// });

// myPromise
//   .then((result) => console.log(result))
//   .catch((err) => console.error("Error : ", err));

// console.log("Programming...");

// console.log("Ibad")

// function cookPastaSync() {
//   console.log("Start cooking pasta 🍝");

//   // blocking loop (pretend cooking for 3s)
//   const start = Date.now();
//   while (Date.now() - start < 20000) {}

//   console.log("Pasta cooked ✅");
//   console.log("Now chopping vegetables 🥕");
// }

// cookPastaSync();

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// async function cookPastaAsync() {
//   console.log("Start cooking pasta 🍝");

//   const pastaCooking = delay(20000).then(() => {
//     console.log("Pasta cooked ✅");
//   });

//   console.log("Meanwhile: chopping vegetables 🥕");

//   await pastaCooking; // wait until pasta finishes
//   console.log("Mix pasta with sauce 🍅");
// }

// cookPastaAsync();

async function getWeather() {
  try {
    console.log("Fetching weather data...");

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();

    console.log("Weather data recieved...");
    console.log(data);
  } catch (err) {
    console.error("Error fetching weather...", err);
  }
}

getWeather();

