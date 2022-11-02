// A pangram is a sentence that contains all the letters of the English alphabet at least once, for example: The quick brown fox jumps over the lazy dog. Your task here is to write a function to check a sentence to see if it is a pangram or not.

function pangram(sentence:string) {
    let strArray = sentence.toLowerCase(); //string
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    //let alphabetArr = alphabet.split('')
    
    let result = true
    for(let index = 0; index < alphabet.length; index++) {
        if(strArray.indexOf(alphabet[index]) < 0) {
            result = false
        }
    }
    
    if(result) {
        console.log(`Pangram`)
    } else {
        console.log(`Not Pangram`)
    }
    
}

pangram('abcdefghijklmnopqrstuvwxyz') // Pangram String
pangram('string') // Not Pangram String
pangram('this is pangram string') // Not Pangram String
pangram('The quick brown fox jumps over the lazy dog') //Pangram String

