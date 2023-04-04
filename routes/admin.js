//External modules
const router = require("express").Router();
//End of External modules

//Modules
const adminController = require("../controllers/admin");
//End of Modules

//Rout of add todo
router
  .post("/add-todo", adminController.addTodo)
  .get("/delete-todo/:id", adminController.deleteTodo)
  .get("/complete-todo/:id", adminController.completeTodo)
  .post("/edit-todo/", adminController.editTodo);
//End of Rout of add todo

//Export rout
module.exports = router;
//End of Export rout
