//Q7: Use inheritance
// Write a class Course with name,fees. Provide following functionalities
// initializer
// Accept data
// Print Data

class Course {
    name: string = '';
    fees: number = 0;

    //initializer
    constructor(name:string, fees:number) {
        this.name = name;
        this.fees = fees;
    }

    //aceept data
    setName(name:string):void {
        this.name = name;
    }

    setFees(fees:number):void {
        this.fees = fees;
    }

    getName():string {
        return this.name;
    }

    getFees():number {
        return this.fees;
    }
    
}

class Computer extends Course {

    list:string[] = [];

    constructor(name:string, fees:number, list:string[]) {
        super(name, fees);
        this.list = list;
    }

    //aceept data
    setList():string[] {
        return this.list;
    }

    getList():string[] {
        return this.list;
    }

}

class Electronics extends Course {
    
    list:string[] = [];

    constructor(name:string, fees:number, list:string[]) {
        super(name, fees);
        this.list = list;
    }

    //aceept data
    setList():string[] {
        return this.list;
    }

    getList():string[] {
        return this.list;
    }

}

const c1 = new Computer('Computer', 250000, ['Java', 'C', '.net'])
console.log(c1)

const e1 = new Electronics('Electronics', 25000, ['Applied Mechanics', 'Maths'])
console.log(e1)