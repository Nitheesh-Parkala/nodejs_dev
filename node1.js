const http = require("http");
const port = 8081;

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h6>Hey we got the server here... using nodemon..</h6>")
    res.end();
})

.listen(port,()=>{
    console.log(`Nodejs Server started Running on Port ${port}`)
});
//http://localhost:8081