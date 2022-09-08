// Accept the full name from user(Name Middlename Surname) in lowercase and Print it in title case.
// NOTE:(Using in-built function

function toTitleCase(name:string) {
    let newName = name.toLowerCase().split(' ');
    for(let index = 0;index < newName.length;index++) {
        newName[index] = newName[index].charAt(0).toUpperCase() + newName[index].slice(1);
    }
    return newName.join(' ');
}

console.log(toTitleCase('hey hi bye'))