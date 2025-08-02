// let num = [5,6,8,2,5,2,9];

// num.forEach((nums) => {
//     console.log(nums**2);

// });

//call back same task

let num = [5,6,8,2,5,2,9];

let calcSqr = (nums) => {
    console.log(nums**2);
}
num.forEach(calcSqr);

console.log(num);