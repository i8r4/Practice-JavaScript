const student = {
    fullName : "Muhammad Ibrahim",
    marks : 91.25,
    printMarks() {
        console.log("marks =", this.marks);
    },
};

const Ibrahim = {
    salary: 50000,
    marks: 45.65
};
const Muhammad = {
    salary: 60000,
    printMarks() {
        console.log("no marks");
    },
};

Ibrahim.__proto__ = student;
Muhammad.__proto__ = student;

console.log(Ibrahim.fullName);
console.log(Ibrahim.marks);
console.log(Ibrahim.printMarks());
console.log(Muhammad.marks);
console.log(Muhammad.printMarks());