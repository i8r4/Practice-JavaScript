// const URL = "https://api.thecatapi.com/v1/images/0XYvRd7oD"

// const getImage = async () => {
//     console.log("getting image ....")
//     let response = await fetch(URL);
//     console.log(response);
//     console.log(response.status);

// };
// console.log(getImage());


/////

// async & await use..........


// const URL = "https://api.thecatapi.com/v1/images/0XYvRd7oD"
// const allImg = document.querySelector("#image");
// const btnImg = document.querySelector("#getimg")

// const getImage = async () => {
//     console.log("getting image link....")
//     let response = await fetch(URL);
//     console.log(response);
//     console.log(response.status);
//     let data = await response.json();
//     allImg.innerText = data.url;
// };
// btnImg.addEventListener("click", getImage);


//promise chain use......


const URL = "https://api.thecatapi.com/v1/images/0XYvRd7oD"
const allImg = document.querySelector("#image");
const btnImg = document.querySelector("#getimg")

function getImage() {
    console.log("getting Image Link .....")
    fetch(URL).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        allImg.innerText = data.url;
    })
}

btnImg.addEventListener("click", getImage);
