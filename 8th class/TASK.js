// let data = "secret info"

// class user {
//     constructor(name,email) {
//         this.name = name;
//         this.email = email;
//     }
//     viewData() {
//         console.log("data =", data);
//     }
// }

// let ibrahim = new user("Ibrahim","ibrahim@gmail.com");
// let pushpo = new user("Pushpo","pushpo@gmail.com");

// console.log(ibrahim.viewData());
// console.log(pushpo);




//



let data = "secret info"

class user {
    constructor(name,email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("data =", data);
    }
}

class admin extends user {
    constructor(name , email){
        super(name , email);
    }
    editData() {
        data = "yes you can edit";
    }
}



let ibrahim = new user("Ibrahim","ibrahim@gmail.com");
let pushpo = new user("Pushpo","pushpo@gmail.com");

let boos = new admin("boos","boos@gmail.com");


console.log(ibrahim.viewData());
console.log(pushpo);

console.log(boos);
console.log(boos.viewData());
console.log(boos.editData());
console.log(boos.viewData());