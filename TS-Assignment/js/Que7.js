"use strict";
//Q7: Use inheritance
// Write a class Course with name,fees. Provide following functionalities
// initializer
// Accept data
// Print Data
class Course {
    //initializer
    constructor(name, fees) {
        this.name = '';
        this.fees = 0;
        this.name = name;
        this.fees = fees;
    }
    //aceept data
    setName(name) {
        this.name = name;
    }
    setFees(fees) {
        this.fees = fees;
    }
    getName() {
        return this.name;
    }
    getFees() {
        return this.fees;
    }
}
class Computer extends Course {
    constructor(name, fees, list) {
        super(name, fees);
        this.list = [];
        this.list = list;
    }
    //aceept data
    setList() {
        return this.list;
    }
    getList() {
        return this.list;
    }
}
class Electronics extends Course {
    constructor(name, fees, list) {
        super(name, fees);
        this.list = [];
        this.list = list;
    }
    //aceept data
    setList() {
        return this.list;
    }
    getList() {
        return this.list;
    }
}
const c1 = new Computer('Computer', 250000, ['Java', 'C', '.net']);
console.log(c1);
const e1 = new Electronics('Electronics', 25000, ['Applied Mechanics', 'Maths']);
console.log(e1);
