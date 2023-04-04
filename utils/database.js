//External modules
const { Sequelize } = require("sequelize");
//End of External modules

//Connection string
const sequelize = new Sequelize("DBTodo", "sa", "12345", {
    dialect: "mysql",
    host: "localhost"
});
//End of Connection string

//Export connection string
module.exports = sequelize;
//End of Export connection string