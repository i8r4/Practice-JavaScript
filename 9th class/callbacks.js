// Call Backs !!!!!!!!!!!!!!!

// function sum(a,b) {
//     console.log(a+b);
// }

// function calculator(a, b, sumCall) {
//     setTimeout(() => {
//         sumCall(a,b);

//     }, 2000);
// }

// calculator(2,4,sum);



// Nesting !!!!!!!!!!!

//if else

// let age = 61;
// if (age >= 18) {
//     if (age >= 60) {
//         console.log("senior");
//     } else {
//         console.log("middle");
//     } 
// } else {
//     console.log("junior");
// }


//loops

// for (let i=0; i<5; i++) {
//     let oneline = "";
//     for (let j=0; j<5; j++) {
//         oneline = oneline + j;
//     }
//     console.log(i, oneline);
// }




//CallBacks Hell !!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function getData(dataId, getNextdata) {
    // setTimeout(() => {
    //     console.log("data =", dataId);
    //     if (getNextdata) {
    //         getNextdata();
    //     }
    // }, 2000);
// }
// getData(1, () => {
//     console.log("getting data 2....");
//     getData(2, () => {
//         console.log("getting data 3....");
//         getData(3, () => {
//             console.log("getting data 4....");
//             getData(4);
//         });
//     });
// });




//Promises !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         // resolve("yes success");
//         reject("Not success");
//     })
// }
// let p1 = getPromise();

// p1.then((res) => {
//     console.log("promises fullfiled", res);
// });

// p1.catch((err) => {
//     console.log("promise rejected", err);
// });

//-----------------------------------

// let result = getData(123);

// function getData(dataId, getNextdata) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data =", dataId);
//             resolve("yes success");
//             // reject("Not success");

//             if (getNextdata) {
//                 getNextdata();
//             }
//         }, 3000);
//     })
// }
// console.log(result);




//Promise Chain !!!!!!!!!!!!!!!!!!!!!!!!!

// function asyncFunc1() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("some data 1..")
//             resolve("yes success");
//         }, 3000);
//     });
// };

// function asyncFunc2() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("some data 2..")
//             resolve("yes success");
//         }, 3000);
//     });
// };



// console.log("fetching data 1..")
// asyncFunc1().then((res) => {
//     console.log("fetching data 2..")
//     asyncFunc2().then((res));
//     });

//-------------------------------------

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data =", dataId);
            resolve("yes success");
            // reject("Not success");
        }, 3000);
    })
}
console.log("getting data 1....");
getData(1)
    .then(() => {
    console.log("getting data 2....");
    }).then(() => {
        return getData(2);
    }).then(() => {
        console.log("getting data 3....");
        return getData(3);
    }).then((res) => {
                console.log(res);
    })