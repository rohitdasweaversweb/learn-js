const user={
    username:"Rohit",
    Price:2000,
    welcomeMsg:function(){
        console.log(`Hi ${this.username} membership Paacakge Price ${this.Price}`);
    }
}

// user.welcomeMsg();
// user.username="Mak"
// user.Price=8000
// user.welcomeMsg();
// console.log(this);

///////////////////////******Arrow Function////////// */

// const authour=function Details(){
//     let name="Ironman"
//     console.log(this.name);
    
// }

// authour();                  

// const addOne=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(addOne(10,63));


const fnTwo=()=>({username:"Rohit Dev"})

console.log(fnTwo());
