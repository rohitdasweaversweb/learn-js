// const jobs=[
//     {id:1,isActive:true},
//     {id:2,isActive:true},
//     {id:3,isActive:true}

// ]

// // const activejobs=jobs.filter(function(job){
// //     return jobs.isActive;
// // });

// const activejobs=jobs.filter(job=>job.isActive);
// console.table(activejobs);


// const person={
//     talk(){
//         let self=this;
//         setTimeout(function(){
//             console.log("self=>",self);
//         },1000)
        
//     }
// }

// person.talk();

/*********************Map function */
// const color=["Red","Green","Blue"];
// const items=color.map(colors=>`<li>${colors}</li>`);
// console.log(items);


/*********Object destructing synstax*********** */
const address={
    street:'MB ROAD',
    city:'Birati',
    country:'INDIA'
}

const {street:st,city:ct,country:cy}=address;

console.log(st);
