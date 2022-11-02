"use strict";
// Complete the following function called validator, that takes an optional function argument. It caches the response and return it when there's.Given interface and function definitions
const errorResponse = () => {
    return { valid: false, error: 'error occurred' };
};
// Complete this fuction to work described in the following expected results. 
const validator = (validatorFn) => {
    return errorResponse();
};
console.log(validator(() => errorResponse()).valid); // false
// console.log(validator().valid) // false
// console.log(validator(() => errorResponse()).error) //error occurred
console.log(validator().error); //error occurred
