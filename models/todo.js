//External modules
const { DataTypes } = require("sequelize");
//End of External modules

//Modules
const sequelize = require("../utils/database");
//End of Modules

//Table in database (class)
const Todo = sequelize.define("Todo", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: true
  }
});
//End of Table in database (class)

//Export class
module.exports = Todo;
//End of Export class