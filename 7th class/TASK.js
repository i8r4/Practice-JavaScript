// let modeBtn = document.querySelector("#mode");
// let currentMode = "light";

// modeBtn.addEventListener("click", () => {
//     if(currentMode === "light") {
//         currentMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     } else {
//         currentMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";

//     }
// console.log(currentMode);
// });


//with css


let modeBtn = document.querySelector("#mode");
let currentMode = "light";
let allBody = document.querySelector("body");

modeBtn.addEventListener("click", () => {
    if(currentMode === "light") {
        currentMode = "dark";
        allBody.classList.add("dark");
        allBody.classList.remove("light");
    } else {
        currentMode = "light";
        allBody.classList.add("light");
        allBody.classList.remove("dark");
    }
console.log(currentMode);
});