const http = require("http");
const port = 8081;// port number

const toDoList =["hey everyone", "hope u all", "are doing" , "good"]; // array
// i'm creating the server...
http.createServer((req,res)=>{

   // it is nothing but a cll back function.
    const{method,url}=req;  // this line is nothing but what is the mthod of the particular request and what is the url of the particular req.
    // console.log(method,url);

    //url(validation)
   if(url ==="/todos"){
      //method (validation)
      if(method ==="GET"){
      console.log("todos route, and it is a get method")
      res.writeHead(200);
      res.write(toDoList.toString())  // here we should convert array into string other wise server will not work and nodemon will crash
      }
   } else if(url ==="/"){
         console.log("/ home default route")
   }
   res.end();
})

//server will listen the port number.
.listen(port,()=>{
    console.log(`Nodejs Server started Running on Port ${port}`)
});
//http://localhost:8081/