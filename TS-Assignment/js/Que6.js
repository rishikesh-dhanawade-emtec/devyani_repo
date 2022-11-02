"use strict";
// Write a program that contains a function that has one parameter, n, representing an integer greater than 0. The function should return n! (n factorial). Then write a main function that calls this function with the values 1 through 20, one at a time, printing the returned results. This is what your output should look like:
// 1
// 2
// 6
// 24
// 120
// 720
// 5040
// 40320
// 362880
// 36288002
function fact(n) {
    if (n == 0)
        return 1;
    else
        (n >= 1);
    return n * fact(n - 1);
}
function main(n) {
    for (let index = 1; index < n; index++) {
        const factValue = fact(index);
        console.log(`Factorial of ${index} : ${factValue}`);
    }
}
main(20);
