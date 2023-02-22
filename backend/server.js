//import express 
const express=require("express");
//import middleware dependencie
const bodyParser=require("body-parser");
const cors=require("cors")
//create express app
const app=express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//import route api
const api=require("./route/api")
//routing 
app.use(cors({
	origin:"*"
}))
app.use("/api",api)
//listen server

app.listen(3000,()=>{
	console.log(`Server running in port 3000`)
})