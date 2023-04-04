//Modules
const Todo = require("../models/todo");
//End of Modules

//Export function for add todos
exports.addTodo = async (req, res) => {
    try {
      await Todo.create({ text: req.body.todo });
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
};

exports.deleteTodo = async (req, res) => {
    try {
      await Todo.destroy({ where: { id: req.params.id } });
      res.redirect("/")
    } catch (err) {
      console.log(err);
    }
};

exports.completeTodo = async (req, res) => {
    try {
      const todo = await Todo.findByPk(req.params.id);
      if (todo.completed == false) todo.completed = true;
      else todo.completed = false;
      await todo.save();
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
};

exports.editTodo = async (req, res) => {
    try {
      const todo = await Todo.findByPk(req.body.id);
      todo.text = req.body.todo;
      await todo.save();
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
};
//End of Export function for add todos
