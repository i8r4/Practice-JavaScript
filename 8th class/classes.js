// Classes !!!!!!!!!!!!!!!


// class car {
//     start() {
//         console.log("start car");
//     }
//     stop() {
//         console.log("stop car");
//     }
//     setbrand(brand) {
//         this.brandName = brand;
//     }
//     setmilage (mileage) {
//         this.kilometer = mileage;
//     }
// }
// let toyota = new car();
// let odi = new car();

// console.log(toyota);
// console.log(toyota.start());
// console.log(odi.stop);
// console.log(odi.stop());

// toyota.setbrand("zipp");
// odi.setmileage(45);

// console.log(odi);
// console.log(toyota);




//Constructor !!!!!!!!!!!!!!!!!!!

// class car {
//     constructor(brand,mileage) {
//         console.log("creating new obj");
//         this.brandName = brand;
//         this.kilometer = mileage;
//     }
//     start() {
//         console.log("start car");
//     }
//     stop() {
//         console.log("stop car");
//     }
// }
// let toyota = new car("zipp",45);
// let odi = new car(55);

// console.log(toyota);
// console.log(odi);
// console.log(odi.brandName = "OOOO");
// console.log(odi);
// console.log(odi.kilometer = 35);
// console.log(odi);



// Inheritance !!!!!!!!!!!!!!!!!!

// class parent {
//     helloFunc() {
//         console.log("hello");
//     }
// }

// class child extends parent {}

// let obj = new child();

// console.log(obj);
// console.log(obj.helloFunc);
// console.log(obj.helloFunc());

//

// class person {
//     eat() {
//         console.log("eating");
//     }
//     sleep() {
//         console.log("sleeping");
//     }
// }

// class engineer extends person{
//     work() {
//         console.log("working time");
//     }
// };

// class doctor extends person{
//     work() {
//         console.log("treat time");
//     }
// }

// let ibrahim = new engineer();
// let pushpo = new doctor();


// console.log(ibrahim);
// console.log(ibrahim.eat());
// console.log(ibrahim.sleep());
// console.log(ibrahim.work());

// console.log(pushpo);
// console.log(pushpo.eat());
// console.log(pushpo.sleep());
// console.log(pushpo.work());




// Super Keyword !!!!!!!!!!!!!!!!!!!!!!

class person {
    constructor(name) {
        this.species = "homo sapiens";
        this.myName = name;
    }
    eat() {
        console.log("eating");
    }
}

class engineer extends person{
    constructor(name) {
        super(name);
    }
    work() {
        super.eat();
        console.log("working time");
    }
}

let ibrahim = new engineer("IP")
console.log(ibrahim);
console.log(ibrahim.work());