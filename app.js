const {readFileSync, writeFileSync} = require('fs')
 
const first = readFileSync('./content/first.txt','utf8'); 
const second = readFileSync('./content/second.txt','utf8'); 
    
writeFileSync('./content/FirstAndSecond.txt',`${first}, ${second}`);
console.log(first);