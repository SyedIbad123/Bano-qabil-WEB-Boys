//  Promises 


const myPromise = new Promise((fulfilled, reject)=>{
    const achiBiryani = false;

    if(achiBiryani === true){
        fulfilled("Waaaah maza agaya!")
    } else {
        reject("Ghar Chalo apne!")
    }
})

myPromise.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.error(error)
})