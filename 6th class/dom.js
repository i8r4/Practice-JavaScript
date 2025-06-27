// console.log("hello");
// // alert("hi");


// //Window object !!!!!!!!!!!!!!!!!

// console.log(window); //browser object. global object.
// window.console.log("hello");



// //DOM (Document object Model)

// console.dir(window.document);
// console.dir(document);
// console.log(document.body);
// // document.body.style.background = "green"



//Selecting with id !!!!!!!!!!!!!!
//use #

// let head = document.getElementById("heading");
// console.dir(head);
// console.log(head);



//Selecting with class !!!!!!!!!!!!!!!!!
//use .

// let head = document.getElementsByClassName("h3h4");
// console.dir(head);
// console.log(head);



//Selecting with Tag Name
//<n>

// let parag = document.getElementsByTagName("p");
// console.log(parag);
// console.dir(parag);



//Query Selector !!!!!!!!!!!!!!!!!!

// let elements = document.querySelector("p");
// console.log(elements);
// console.dir(elements);

// let allElements = document.querySelectorAll("p");
// console.log(allElements);
// console.dir(allElements);

// !!! if id,use # (only 1 elem print) & if class, use .!!!
//this also use in query



//Properties !!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//Tag name

// let elements = document.querySelector("p");
// console.log(elements);
// console.dir(elements);

// console.log(elements.tagName);

//Inner Text


// let elements = document.querySelector("p");
// console.log(elements);
// console.dir(elements);

// console.log(elements.innerText);
// (you can change p.innerText = "hello paragr")

//Inner HTML

// let elements = document.querySelector("p");
// console.log(elements);
// console.dir(elements);

// console.dir(elements.innerHTML);
//(you can change p.innerHTML = "hello paragr")

//Text Content 

/*if any element (style="visibility: hidden")
then 
console.log/decodeURI(emelent.textContent);*/