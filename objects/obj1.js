const dummyObject = {
    id: 1,
    name: "Sample Object",
    isActive: true,
    tags: ["example", "dummy", "test"],
    details: {
        created: "2024-06-01",
        updated: "2024-06-10"
    }
};

// console.log(dummyObject.details.created)
// dummyObject.greeting=function(){
//     console.log(`hello user my name is ${this.name}`);
// }
// dummyObject.greeting();

// dummyObject.greeting=function(){
//     return(`hello user my name is ${this.name}`);
// }
// console.log(dummyObject.greeting());


const dummyObject2 = {
    id: 2,
    name: "Second Object",
    isActive: false,
    tags: ["second", "object", "sample"],
    details: {
        created: "2024-05-15",
        updated: "2024-06-05"
    }
};

const dummyObject3 = {
    id: 3,
    name: "Third Object",
    isActive: true,
    tags: ["third", "object", "demo"],
    details: {
        created: "2024-04-20",
        updated: "2024-06-08"
    }
};

const res = {
  obj1: dummyObject,
  obj2: dummyObject2,
  obj3: dummyObject3
};
console.log(res);
