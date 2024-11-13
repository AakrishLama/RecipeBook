const express = require("express")
const app = express()
const port = 9000
const mongoDB = require("./db")
mongoDB();
app.use(express.json());  

app.get("/", (req, res)=>{
  res.send("Hello world")
})

app.listen(port,()=>{
  console.log(`listening to port ${port}`)
})