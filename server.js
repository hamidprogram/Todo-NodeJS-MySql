//Internal modules
const path = require("path");
//End of Internal modules

//External modules
const app = require("express")();
const bodyparser = require("body-parser");
//End of External modules

//Modules
const { setStatics } = require("./utils/statics");
const adminRouts = require("./routes/admin");
const indexRout = require("./routes/index");
const errorController = require("./controllers/error");
const sequelize = require("./utils/database");
//End of Modules

//Middlewares
app.use(bodyparser.urlencoded({ extended: false }));
//End of Middlewares

//Ejs
app.set("view engine", "ejs").set("views", "views");
//End of Ejs

//Statics
setStatics(app);
//End of Statics

//Routes
app
  .use(indexRout)
  .use("/admin", adminRouts)
  //End of Routes

  //404
  .use(errorController.get404);
//End of 404

//Create table and connect app to database
sequelize
  .sync()
  .then((result) => {
    console.log(result);
    //Start server
    app.listen(3000, () => console.log("Server is running."));
    //End of Start server
  })
  .catch((err) => console.log(err));
//End of Create table and connect app to database
