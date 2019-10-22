'use strict';

function jediName(firstName, lastName) {
  return lastName.slice(0, 3) + firstName.slice(0, 2);
}

const jediName1 = jediName('Caleb', 'King');
console.log(jediName1);