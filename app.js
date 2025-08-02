let orangeScore = 0;
let brownScore = 0;
let limeScore = 0;
let oliveBrownScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const mixBtn = document.querySelector("#mixBtn");

const orangeScorePara = document.querySelector("#orangeScore");
const brownScorePara = document.querySelector("#brownScore");
const limeScorePara = document.querySelector("#limeScore");
const oliveBrownScorePara = document.querySelector("#oliveBrownScore");

let selectedColors = [];

const showMsg = (text) => {
    msg.innerText = text;
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        if (!selectedColors.includes(userChoice)) {
            selectedColors.push(userChoice);
        }
        showMsg("Selected: " + selectedColors.join(", "));
    });
});



mixBtn.addEventListener("click", () => {
    if (selectedColors.length < 2) {
        showMsg("Please select at least two colours.");
        return;
    }

    if (selectedColors.length === 2) {
        const [c1, c2] = selectedColors;

        if ((c1 === "red" && c2 === "yellow") || (c1 === "yellow" && c2 === "red")) {
            orangeScore++;
            orangeScorePara.innerText = orangeScore;
            showMsg("Result: Orange");
        }
        else if ((c1 === "red" && c2 === "green") || (c1 === "green" && c2 === "red")) {
            brownScore++;
            brownScorePara.innerText = brownScore;
            showMsg("Result: Brown");
        }
        else if ((c1 === "yellow" && c2 === "green") || (c1 === "green" && c2 === "yellow")) {
            limeScore++;
            limeScorePara.innerText = limeScore;
            showMsg("Result: Lime");
        }
        else {
            showMsg("Unknown mix");
        }
    }
    else if (selectedColors.length === 3) {
        oliveBrownScore++;
        oliveBrownScorePara.innerText = oliveBrownScore;
        showMsg("Result: Olive Brown");
    }

    selectedColors = [];
});








///////////////////////////////////////////////////////////////////////



// let orangeScore = 0;
// let brownScore = 0;
// let limeScore = 0;
// let oliveBrownScore = 0;

// const choices = document.querySelectorAll(".choice")
// const msg = document.querySelector("#msg");

// const orangeScorePara = document.querySelector("#orangeScore")
// const brownScorePara = document.querySelector("#brownScore")
// const limeScorePara = document.querySelector("#limeScore")
// const oliveBrownScorePara = document.querySelector("#oliveBrownScore")


// const mixColour = (userChoice) => {
//     console.log("user choice = " ,userChoice);
// }

// choices.forEach((choice) => {
//     choice.addEventListener("click" , () => {
//         const userChoice = choice.getAttribute("id");
//         mixColour(userChoice);
//     })
// });

