// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-name')
const sayHi = require('./5-utils')
//console.log(names);
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')

/*
console.log(data)

sayHi(names.john);
sayHi(names.peter);
*/