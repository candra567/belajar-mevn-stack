const { Sequelize, DataTypes, Model } = require("sequelize");
const BaseModel = require("./BaseModel");

class EmployeModel extends Model {}
EmployeModel.init({
	id_employe:{
     type:DataTypes.INTEGER,
     primaryKey:true,
     autoIncrement:true
	},
    name_employe: {
        type: DataTypes.STRING
    },
    salary_employe: {
        type: DataTypes.INTEGER
    },

}, {
    sequelize: BaseModel,
    modelName: "EmployeModel",
    tableName: "table_employe",
    timestamps: false
})
module.exports = EmployeModel;