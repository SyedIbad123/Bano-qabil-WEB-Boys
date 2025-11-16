// async await

// function cookPastaSync() {
//   console.log("Start cooking pasta 🍝");
  
//   // blocking loop (pretend cooking for 3s)
//   const start = Date.now();
//   while (Date.now() - start < 5000) {}
  
//   console.log("Pasta cooked ✅");
//   console.log("Now chopping vegetables 🥕");
// }

// cookPastaSync();



// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function cookPastaAsync() {
//   console.log("Start cooking pasta 🍝");

//   const pastaCooking = delay(10000).then(() => {
//     console.log("Pasta cooked ✅");
//   });

//   console.log("Meanwhile: chopping vegetables 🥕");

//   await pastaCooking; // wait until pasta finishes
//   console.log("Mix pasta with sauce 🍅");
// }

// cookPastaAsync();



// Example with async/await
async function getWeather() {
  try {
    console.log("Fetching weather data...");

    const post = document.getElementById("post")

    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();

    post.innerHTML = `<h2>${data.title}</h2> <p>${data.body}</p>`

    console.log("Weather data received ✅");
    console.log(data);
  } catch (error) {
    console.log("Error fetching weather ❌", error);
  }
}

getWeather();
console.log("Meanwhile: you can browse other pages...");
