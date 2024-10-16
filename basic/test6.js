const myarr=[1,23,6,78,9];
// console.log("****",myarr);

// myarr.push(90)
// myarr.unshift(20)
// myarr.shift();

// console.log(myarr.includes(96663));

/////******************slice & Splice*******************//

const met1=myarr.slice(-2,-1);
// console.log(met1);
// console.log("++ +A ++",myarr);

const met2=myarr.splice(1,3)
// console.log(met2);
// console.log("----B---",myarr);

/////////////concation////////////
const arr1=["Aplle","HP","Lenevo","MSI"]
const arr2=["MacBook","Pavilion","IdeaPad","Astra"]

// arr1.push(arr2)
// const arr3=arr1.concat(arr2)
const arr3= [...arr1,...arr2]
console.log(arr3);





