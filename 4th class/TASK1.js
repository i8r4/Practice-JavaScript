let marks = [65,98,51,89,65,62];
let sum = 0;

for (let value of marks) {
    sum += value;
}
let avg = sum / marks.length;
console.log(avg);
console.log(`avg marks = ${avg}`);