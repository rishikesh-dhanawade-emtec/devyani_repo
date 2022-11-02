// Write a program to Interchange First and Last Element of a List

let array = [1, 2, 3, 4, 5]
let size = array.length;

console.log(`Original array : ${array}`)
//interchange first and last element of a list
for (let index = 0; index < size; index++) {
    let temp = array[0]
    array[0] = array[size-1]
    array[size-1] = temp
}

console.log(`After interchanging of first and last element : ${array}`)