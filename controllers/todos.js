//Modules
const Todo = require("../models/todo");
//End of Modules

//Export function for read todos
exports.getIndex = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.render("index", {
      pageTitle: "My Todos -HamidMaster.ir",
      todos,
    });
  } catch (err) {
    console.log(err);
  }
};
//End of Export function for read todos
