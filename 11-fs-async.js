
const { readFile, writeFile} = require('fs');

console.log('start\n')
readFile('./content/text.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    const first =  result;
    readFile('./content/subfolder/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    } 
    const second = result;
    writeFile('./content/result-sync2.txt',
    `Here is the result :
    \n FIRST = ${first} \n and SECOND = 
    \n ${second}`, 
    (err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log('done this task');
    })
    })

})
console.log('starting the new task')