const heading = document.getElementsByClassName("heading");

console.log(heading)

for(let i = 0 ; i < heading.length ; i++){
    heading[i].style.backgroundColor = "black"
    heading[i].style.color = "white"
    heading[i].style.fontSize = "10px"
}