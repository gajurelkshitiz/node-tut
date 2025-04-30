
// Importing the required modules
// one option
// const { kshitiz, rajan } = require('./4-names');
// another option
const names = require('./4-names');

// Importing the required modules
const sayHi = require('./5-utils');


sayHi('John');
sayHi(names.kshitiz);
sayHi(names.rajan);

// alternative flavor of importing
// console.log(require('./6-alternative-flavor'));

const data = require('./6-alternative-flavor');
console.log(data);

require('./7-mind-grenade');
