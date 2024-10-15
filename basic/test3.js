//datatypes are 2 types in js ::
///  i) Primitive[String,boolean,number,symbol]   ,...   ii) Non- Primitive[Array,object,function]
///Stack [primitive] ............... Heap[Non-primitive]

let mYname="Rohit"
let anothername= mYname;
 anothername="js-coding"
 console.log(mYname);
 console.log(anothername);

 let firstUser = {
    email:"r12@gmail.com",
    Password :"Rohit#123"
 }
let secondUser=firstUser
secondUser.email="t123@gmail.com"
 console.log(firstUser);
 console.log(secondUser);

 

 
 
