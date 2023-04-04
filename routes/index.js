//External modules
const router = require("express").Router();
//End of External modules

//Modules
const todosController = require("../controllers/todos.js");
//End of Modules

//Rout of index todo
router.get("/", todosController.getIndex);
//End of Rout of index todo

//Export rout
module.exports = router;
//End of Export rout
