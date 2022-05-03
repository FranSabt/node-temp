// alternatives paths

const { readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/text.txt', 'utf8');
const second = readFileSync('./content/subfolder/first.txt', 'utf8');

//console.log(`First: ${first} \n Second: ${second}`);

writeFileSync('./content/result-sync.txt', 
`\n\nThe result is:\n ${first},\n ${second}`,
{flag: 'a'});

console.log('Done with this task');
console.log('Starting the next one');