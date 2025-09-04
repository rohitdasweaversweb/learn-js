// function myfunc1(num1, num2) {
//     return num1 + num2;
// }

const { use } = require("react");

// console.log(myfunc1(10, 20));

function loginUserMessage(username) {
    if (!username) {
        return "Please provide a username"
    } else {
        return `Welcome back, ${username}!`
    }
}

// console.log(loginUserMessage("Rohit"));

// const addingNum=(num1,num2)=>{
//     return num1+num2;
// }

// console.log(addingNum(10,20));

// const user = {
//   name: "Alice",
//   greet: (u) => {
//     console.log("Hello, my name is " + this.name);
//   }
// };

// user.greet({name:"Rohit"}); 


// const user = {
//   name: "Alice",
//   greet: (u) => {
//     console.log("Hello, my name is " + u.name);
//   }
// };

// user.greet({ name: "Rohit" }); // Hello, my name is Rohit

const user = {
    name: "Alice",
    price: 100,
    gretting: function () {
        console.log(`Welcome to my website ${user.name}`);
    }
}

// user.name="Rohit";
// user.gretting(); 


// function exm(){
//     const username="Rohit";
//     console.log(this.username);

// }


// const example=()=>{
//     const username="Rohit";
//     console.log(this.username);

// }

const example = (num1, num2) => (num1 + num2)
console.log(example(2, 3));

const example1 = () => ({ Bookname: "JavaScript", price: 299 });

console.log(example1());
