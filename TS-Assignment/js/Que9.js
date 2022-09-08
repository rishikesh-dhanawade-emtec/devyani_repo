"use strict";
// Write a function translate() that will translate a text into "rövarspråket" (Swedish for "robber's language"). That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
function robbersLanguage(string) {
    let newString = '';
    for (let index = 0; index < string.length; index++) {
        if (string[index] == " ") {
            newString = newString + string[index];
        }
        else if (string[index] != 'a' || string[index] != 'e' || string[index] != 'i' || string[index] != 'o' || string[index] != 'u') {
            newString = newString + string[index] + 'o' + string[index];
        }
        else {
            newString = newString + string[index];
        }
    }
    return newString;
}
console.log(robbersLanguage("this is fun")); //tothohioisos ioisos fofuounon
