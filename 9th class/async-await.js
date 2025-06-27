// async function hello() {
//     console.log("Hello");
// }
// console.log(hello());


//------------------

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 2000);
//     });
// };

// async function getWeatherData() {
//     await api();
//     await api();
//     await api();
// };
// console.log(getWeatherData());

//------with calls----------------------------------------

// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data =", dataId);
//             resolve("yes success");
//             // reject("Not success");
//         }, 2000);
//     });
// };
// async function getAllData() {
//     console.log("getting data 1 .....");
//     await getData(1);
//     console.log("getting data 2 .....");
//     await getData(2);
//     console.log("getting data 3 .....");
//     await getData(3);
//     console.log("getting data 4 .....");
//     await getData(4);
    
// };
// console.log(getAllData());

//-------without calls-------------------------------

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data =", dataId);
            resolve("yes success");
            // reject("Not success");
        }, 2000);
    });
};
(async function() {
    console.log("getting data 1 .....");
    await getData(1);
    console.log("getting data 2 .....");
    await getData(2);
    console.log("getting data 3 .....");
    await getData(3);
    console.log("getting data 4 .....");
    await getData(4);
    
})(); //copys not available
