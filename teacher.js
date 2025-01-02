import {Person} from './person.js';

export class Teacher extends Person{

    constructor(name,degree){
        super (name);
        this.degree=degree;
    }


    tech(){
        console.log(`Shimanta SIr`);
        
    }
}