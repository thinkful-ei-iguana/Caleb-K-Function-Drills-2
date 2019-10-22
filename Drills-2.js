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

//DECODED MESSAGE = 'for loop'


//How many days in a month

function daysInMonth(month, leapYear = false) {
  switch(month) {
  case 'February':
    return (leapYear ? 29 : 28);
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    return 30;
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    return 31;
  default:
    throw 'Must provide a valid month';
  }
}

// const daysInMonth1 = daysInMonth('March', true);
// console.log(daysInMonth1);


//Rock Paper Scissors
function rockPaperScissors(playerChoice) {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  let playerWon;

  if ((typeof playerChoice !== 'number') || playerChoice < 1 || playerChoice > 3) {
    throw 'Not a valid entry. Try 1, 2, or 3.';
  }

  if (playerChoice === computerChoice) {
    return 'You Tied';
  }

  switch (playerChoice){
  case 1:
    computerChoice === 2 ? playerWon = false : playerWon = true;
    break;
  case 2:
    computerChoice === 3 ? playerWon = false : playerWon = true;
    break;
  case 3:
    computerChoice === 1 ? playerWon = false : playerWon = true;
    break;
  }

  //return winner
  if (playerWon) {
    console.log('Congrats! You beat the computer!');
  } else {
    console.log('You lost to the computer... Drats!');
  }
}

rockPaperScissors(2);