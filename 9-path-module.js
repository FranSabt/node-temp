// Paths

const path = require('path');

console.log(path.sep) //root os the system

const filePath = path.join('./content/', 'subfolder', 'text.txt');
console.log(filePath); // relative path of the looking file

const base = path.basename(filePath);
console.log(base); // workin file of the path

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute); //absolute path from the root on to the file