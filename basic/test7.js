/////////////////*****objects************ */
const sym=Symbol("red")
const obj={
    Name:"Rohit",
    "Role":"SDE",
    [sym]:"Blue",
    Email:"r12@gmil.com",
    Ph:789456321
    
}
obj.Email="T12@GMAIL.COM"
console.log(obj);

console.log(typeof obj[sym]);
