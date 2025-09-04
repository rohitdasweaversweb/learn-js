const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.length);
// numbers.push(6)
// numbers.pop()
// numbers.unshift(25)
// numbers.shift()
const num2=numbers.slice(1,3)
console.log("B",num2)    

const num3=numbers.splice(1,1,"Graps");
console.log("C",num3)
console.log(typeof numbers);

