let score = prompt("What is the score?");
let grade;

if(score >= 90 && score <=100){
    grade = "A";
} else if(score >= 70 && score <=89) {
    grade = "B";
} else if(score >= 60 && score <=69) {
    grade = "C";
} else if(score >= 40 && score <=59) {
    grade = "D";
} else if(score >= 0 && score <=39) {
    grade = "F";
} 

console.log("This score is",grade,"grade");