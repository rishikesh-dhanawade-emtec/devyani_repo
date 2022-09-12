"use strict";
// Write a program that asks the user how many days are in a particular month, and what day of the week the month begins on (0 for Monday, 1 for Tuesday, etc), and then prints a calendar for that month. For example, here is the output for a 30-day month that begins on day 4 (Thursday).
function calendar() {
    let days = Number(prompt("Enter the number of days"));
    let weekday = Number(prompt("Enter the weekday index as \n 0 for monday, 1 for tuesday and so on"));
    console.log('Mon Tue Wed Thur Fri Sat Sun');
    let result = '';
    for (let j = 0; j < weekday; j++) {
        result += '    ';
    }
    for (let i = 1; i <= days; i++) {
        if (i < 10) {
            result += ('  ' + i + ' ');
        }
        else {
            result += (' ' + i + ' ');
        }
        if ((i + weekday) % 7 == 0) {
            result += '\n';
        }
    }
    return result;
}
console.log(calendar());
