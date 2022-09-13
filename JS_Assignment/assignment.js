// Create a function that takes two numbers as arguments and returns their sum.
// addition(3, 2) ➞ 5
// addition(-3, -6) ➞ -9
// addition(7, 3) ➞ 10

function addition(n1, n2) {
    const sum = n1 + n2;
    console.log(`Sum of ${n1} and ${n2} is ${sum}`);
}

addition(3, 2)
addition(-3, -6)
addition(7, 3)



// Create a function that takes voltage and current and returns the calculated power
// circuitPower(230, 10) ➞ 2300
// circuitPower(110, 3) ➞ 330
// circuitPower(480, 20) ➞ 9600

function circuitPower (voltage, current) {
    const power = voltage * current
    console.log(`Circuit Power is : ${power}`)
}

circuitPower(230, 10)
circuitPower(110, 3)
circuitPower(480, 20)




// Write a function that takes an integer minutes and converts it to seconds.
// convert(5) ➞ 300
// convert(3) ➞ 180
// convert(2) ➞ 120

function convert (minutes) {
    const seconds = minutes * 60
    console.log(`Seconds : ${seconds}`)
}

convert(5)
convert(3) 
convert(2) 




// Write a function that takes the base and height of a triangle and return its area.
// triArea(3, 2) ➞ 3
// triArea(7, 4) ➞ 14
// triArea(10, 10) ➞ 50

function triArea (base, height){
    const area = (1/2) * base * height
    console.log(`Area of Triangle is : ${area}`)
}

triArea(3, 2)
triArea(7, 4)
triArea(10, 10)




// Create a function that takes the age in years and returns the age in days.
//  calcAge(65) ➞ 23725
//  calcAge(0) ➞ 0
//  calcAge(20) ➞ 7300

/* function calcAge(years) {
    const leapDays = parseInt(years / 4);
    console.log(leapDays)
    const days = (years * 365)+leapDays;
    console.log(`Age in days : ${days}`)
}*/

function calcAge(years) {
    const days = (years * 365);
    console.log(`Age in days : ${days}`)
}

calcAge(65)
calcAge(0)
calcAge(20)




// create a function to swap two parameters
//  let n1 = 10
//  let n2 = 20
//  swap(n1, n2) ➞ n1: 20, n2: 10

let n1 = 10
let n2 = 20
function swap (n1, n2){
    n1 = n1 + n2
    n2 = n1 - n2
    n1 = n1 - n2
    console.log(`n1: ${n1}, n2: ${n2}`)
}
swap(n1, n2)




// create a function to find out a maximum from an array
// const numbers = [10, 21, 5, 25, 6, 60, 23, 26, 49, 98]
// findMax(numbers) ➞ 98

const numbers = [10, 21, 5, 25, 6, 60, 23, 26, 49, 98]

function findMax(numbers) {
    let largest = numbers[0]
    for(let index = 0; index < numbers.length; index++) {
        if(numbers[index] > largest)
            largest = numbers[index]
    }
    console.log(largest) 
}

findMax(numbers) 





// create a function to find out a minimum from an array
// const numbers = [10, 21, 5, 25, 6, 60, 23, 26, 49, 98]
// findMax(numbers) ➞ 5

const numbers1 = [10, 21, 5, 25, 6, 60, 23, 26, 49, 98]

function findMin(numbers1) {
    let largest = numbers1[0]
    for(let index = 0; index < numbers1.length; index++) {
        if(numbers1[index] < largest)
            largest = numbers1[index]
    }
    console.log(largest) 
}

findMin(numbers1)




// Write a function which checks given input/parameter:
// If input/parameter is divisible by 3 print => Fizz
// If input/parameter is divisible by 5 print => Buzz
// If input/parameter is divisible by 3 or 5 print => FizzBuzz
// input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value
// If input/parameter is other than Number/Value print => 'Nan Not a Number! Please Input
// Number'
// isfizzBuzz('one') ➞ Nan Not a Number! Please Input Number
// isfizzBuzz(true) ➞ Nan Not a Number! Please Input Number
// isfizzBuzz(9) ➞ Fizz
// isfizzBuzz(10) ➞ Buzz
// isfizzBuzz(30) ➞ FizzBuzz
// isfizzBuzz(11) ➞ Some odd number entered: 11


function isfizzBuzz(input) {
    if(typeof input == 'number') {
        if (input % 3 == 0 && input % 5 == 0) {
            console.log(`FizzBuzz`)
        } else if(input % 3 == 0) {
            console.log(`Fizz`)
        } else if (input % 5 == 0) {
            console.log(`Buzz`)
        } else {
            console.log(`Some number entered ${input}`)
        }
    } else {
        console.log(`Nan Not a Number! Please Input Number`)
    }
}


isfizzBuzz('one')
isfizzBuzz(true)
isfizzBuzz(9)
isfizzBuzz(10)
isfizzBuzz(30)
isfizzBuzz(11)




// Write a function which checks number till given input/parameter is odd or even

let num;
function evenOdd (num) {
    for(let index = 1; index < num; index++) {
        if(index % 2 == 0) {
            console.log(`${index} is even`)
        } else {
            console.log(`${index} is odd`)
        }
    }
}

evenOdd(10)




// Write a function which Calculate the sum of multiples of 3 and 5 for a given limit
// sum0fMultiples(10) ➞ sum0fMultipleValue of 3 & 5 upto 10 digit is: 33

function sum0fMultiples(num) {
    let sum = 0
    for(let index = 0; index <= num; index++) {
        if(index % 3 == 0 || index % 5 == 0) {
            sum = sum + index;
        }
    }
    console.log(`Sum of multiples : ${sum}`)
}

sum0fMultiples(10)



// Write a function which Prints/Shows star (or any pattern) for the number of times and rows provided
// showPattern(5)
//  *
//  **
//  ***
//  ****
//  *****

let string = ""
function showPattern(num) {
    for(let index = 1; index <= num; index++) {
        for(let index1 = 0; index1 < index; index1++) {
            string = string + "*"
        }
        string = string + "\n"
    }
    console.log(string)
}

showPattern(5)





// Write a function which Calculate the sum of marks provided in an array, average it and also show Grade
// Grade criteria/mechanism is:
// 0% to 70% = > D Grade
// 71% to 79% => C Grade
// 81% to 89% => B Grade
// 91% to 100% => A Grade
// const marks = [55, 85, 55, 65];
// calculateGrades(marks) ➞ Grade: D


const marks = [55, 85, 55, 65]

let sum = 0;
for (let index = 0; index < marks.length; index++) {
    sum = sum + marks[index]
    avg = sum / marks.length
}
// console.log(sum)
// console.log(avg)

function calculateGrades(marks) {
   if (avg < 70) {
    console.log(`D Grade`)
   } else if (avg < 70 && avg >= 79) {
    console.log(`C Grade`)
   } else if (avg < 80 && avg >= 89) {
    console.log(`B Grade`)
   } else {
    console.log(`A Grade`)
   }
}

calculateGrades(marks) 




// Write a function which show or print Prime Number upto provided range (with and without map)
// showPrimeNumbers(20);
// Prime Number: 2
// Prime Number: 3
// Prime Number: 5
// Prime Number: 7
// Prime Number: 11
// Prime Number: 13
// Prime Number: 17
// Prime Number: 19

//Without map

function isPrime(num) {
    if(num < 2) {
        return false
    } else {
        for(let index = 2; index < num; index++) {
            if(num % index == 0) {
                return false
            }
        } 
        return true
    }
}

function showPrimeNumbers(range) {
    for(let index = 1; index < range; index++) {
        if(isPrime(index)) {
            console.log(`Prime Number : ${index}`)
        }
    }
}
showPrimeNumbers(20) 


//With map

function showPrimeNumbers1(num) {
    let primeArray = []
    for(let i = 2; i <= num; i++) {
        let isPrime = true
        for (let j = 2; j < i; j++) {
            if(i % j == 0 && i != j) {
                isPrime = false
            }
        }
        if(isPrime)
            primeArray.push(i)
    } 

    const prime = primeArray.map((value) => {
        console.log(`Prime Number : ${value}`)
    })
}

showPrimeNumbers1(20)

