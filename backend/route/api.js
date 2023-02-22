//import express 
const express=require("express");
//create router 
const api=express.Router();

//import controller
const EmployeController=require("../controller/EmployeController")
//management route
api.get("/employe",EmployeController.index)
api.get("/employe/:id",EmployeController.find)
api.post("/employe",EmployeController.store)
api.put("/employe/:id",EmployeController.update)
api.delete("/employe/:id",EmployeController.destroy)
module.exports=api;