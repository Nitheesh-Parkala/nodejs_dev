// const http = require(http);
const express = require("express"); //here we are importing express rather then http.

//initialization application
const app = express();

//application will now use only json data format.
app.use(express.json());

const port =8081;
toDoList = ["hey everyone","hope you"," are doing", "good"];

app.get("/todos",(req,res)=>{
  //callback
  res.status(200).send(toDoList)
})

.listen(port,()=>{
   console.log(`Node javascript express started running successfully on port ${port}`)
})