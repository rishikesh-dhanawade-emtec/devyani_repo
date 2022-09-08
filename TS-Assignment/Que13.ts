// Replace single element ‘b’ in given list ['a', 'b', 'c', 'd', 'e'] with [1, 2, 3]

var list = ['a', 'b', 'c', 'd', 'e'];

// find index of element b
var index = list.indexOf('b')
// console.log(`index of b : ${index}`)

//replace element b with [1, 2, 3]
list.splice(index, 1, '[1, 2, 3]')
console.log(list)