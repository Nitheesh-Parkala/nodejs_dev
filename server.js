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

//post method...
app.post("/todos",(req,res)=>{
  let newTodoList = req.body.item;
  toDoList.push(newTodoList);
  res.status(201).send({
    message:"The task was added successfully"
  })
})

//delete method..
app.delete("/todos",(req,res)=>{
  var itemToDelete = req.body.item;
  toDoList.find((elem,index)=>{
    if(elem===itemToDelete){
      toDoList.splice(index,1)
    }
  });
  res.status(202).send({
    message:`Deleted Item ${req.body.item} successfully`
  })
})
// put, patch
app.all("/todos", (req, res)=>{
    res.status(501).send({
        message: "Not yet implemented"
    })
})
app.all("*",(req,res)=>{
  res.status(404).send({
    message:"Default URL"
  })
})
.listen(port,()=>{
   console.log(`Node javascript express started running successfully on port ${port}`)
})