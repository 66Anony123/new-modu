const tt = require('http');

const server = tt.createServer((req,res)=>
{
    if(req.url==='/')
    {
        res.end("It is the homepage");
    }
    if(req.url==='/aboutme')
    {
        res.end("My name is Giovani Gorgio");
    }

res.end();
})

server.listen(3000);