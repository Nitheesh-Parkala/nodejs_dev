const http = require("http");
const port = 8081;

const toDoList =["hey everyone", "hope u all", "are doing" , "good"];

http.createServer((req,res)=>{
    const{method,url}=req;
    // console.log(method,url);
   if(url=="/toDoList"){
console.log("todos route")
   }else if(url=="/"){
console.log("/ todos")
   }
   res.end();
})

.listen(port,()=>{
    console.log(`Nodejs Server started Running on Port ${port}`)
});
//http://localhost:8081/