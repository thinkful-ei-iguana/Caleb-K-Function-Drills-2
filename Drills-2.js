'use strict';

//Jedi Name
function jediName(firstName, lastName) {
  return lastName.slice(0, 3) + firstName.slice(0, 2);
}


//To infinity...
function beyond(num) {
  if(!isFinite(num)) {
    console.log('And beyond');
  } else if (num > 0) {
    console.log('To infinity');
  } else if (num < 0) {
    console.log('To negative infinity');
  } else if (num === 0) {
    console.log('Staying home');
  }
}


//Cracking the code
function decode(encodedWord) {
  switch(encodedWord[0]) {
  case 'a':
    return encodedWord[1];
  case 'b':
    return encodedWord[2];
  case 'c':
    return encodedWord[3];
  case 'd':
    return encodedWord[4];
  default:
    return ' ';
  }
}

// const code1 = decode('daniel');
// console.log(code1); 

//DECODED MESSAGE = 'for loop'
