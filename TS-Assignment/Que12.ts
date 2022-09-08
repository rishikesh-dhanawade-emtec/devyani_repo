// Write a python program to print sum of tuple elements

const tuple = [1, 2, 3, 4, 5]
let tupleLength = tuple.length;

// for(let index = 0; index < tupleLength; index++) {
//     console.log(tuple[index])
// }
console.log(`Tuple elements : ${tuple}`)

let sum = 0
for (let i = 0; i < tupleLength; i++) {
    sum = sum + tuple[i]
}
console.log(`Sum of tuple elements : ${sum}`)