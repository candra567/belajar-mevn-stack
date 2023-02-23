//import express 
const express=require("express");
//create router 
const api=express.Router();

//import controller
const EmployeController=require("../controller/EmployeController")
const AuthController=require("../controller/AuthController")
//management route
api.get("/verify",AuthController.verify);
api.post("/login",AuthController.login)
api.get("/employe",EmployeController.index)
api.get("/employe/:id",EmployeController.find)
api.post("/employe",EmployeController.store)
api.put("/employe/:id",EmployeController.update)
api.delete("/employe/:id",EmployeController.destroy)
module.exports=api;