const {readFile,writeFile} = require('fs');

readFile('./content/first.txt','utf8',(res,err)=>{

    if(res){
        console.log(res);
    }
    else{
        console.log(err);
    }
const first = res;


readFile('./content/second.txt','utf8',(res,err)=>{

    if(res){
        console.log(res);
    }
    else{
        console.log(err);
    }
const second = res;
writeFile('./content/FirstAndSecond.txt',`Here is the result ${first} + ${second}`,
(err,res)=>{
    if(err)
    {
        console.log(err); 
        return;
    }
    console.log(res);
})
})


})