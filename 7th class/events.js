// let divs = document.querySelector("div");

// divs.onmouseover = () => {
//     console.log("this is div guys")
// };


// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("this is 1st click");
//     let a = 25;
//     a++;
//     console.log(a);
// };

// let btn2 = document.querySelector(".btn2");

// btn2.ondblclick = () => {
//     console.log("this is double click")
// };



//Events object !!!!!!!!!!!!!!!!!!!!

// btn1.onclick = (event) => {
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.clientX, event.clientY);
// };



// Event Listeners !!!!!!!!!!!!!!!!!!

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", (ev) => {
//     console.log("button was clicked");
// });


// btn1.addEventListener("click", (event) => {
//     console.log("button was clicked 2nd time");
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.clientX, event.clientY);
// });


// const handler = () => {
//     console.log("button was clicked and remove");
// };

// btn1.addEventListener("click", handler);
// btn1.removeEventListener("click", handler);