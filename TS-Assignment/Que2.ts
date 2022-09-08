//Q2: Create an arrow function that takes an object with default values. Here're the interface and expected results.

interface Params {
    firstParam?: string
    secondParam?: string
}

let obj1:Params = {
    firstParam: 'defaultFirst',
    secondParam: 'defaultSecond'
}

const myFunc = (param?:Params) : Object => {
    if(param) {
        obj1.firstParam = param.firstParam || obj1.firstParam;
        obj1.secondParam = param.secondParam || obj1.secondParam;
    }
    return obj1;
}

console.log(myFunc()) 
// Output:
//{firstParam: 'defaultFirst', secondParam: 'defaultSecond'}

console.log(myFunc({ firstParam: 'first', secondParam: 'second' }))
//output:
// {firstParam: 'first', secondParam: 'second'}

// console.log(myFunc({ firstParam: 'first' }))
//output:
// {firstParam: 'first', secondParam: 'defaultSecond'}

// console.log(myFunc({ secondParam: 'second' }))
//output:
// {firstParam: 'defaultFirst', secondParam: 'second'}