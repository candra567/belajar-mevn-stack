const {Sequelize} =require("sequelize");
const database=require("../config/database")
const BaseModel=new Sequelize(database.database,database.user,database.password,{
	dialect:database.dialect,
	host:database.host
});
module.exports=BaseModel;
