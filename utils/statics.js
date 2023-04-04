//Internal modules
const path = require("path");
//End of Internal modules

//External modules
const express = require("express");
//End of External modules

//Exports statics
exports.setStatics = (app) => {
  app
    .use(express.static(path.join(__dirname, "..", "public")))
    .use(
      express.static(
        path.join(__dirname, "..", "node_modules", "bootstarp-v4-rtl", "dist")
      )
    )
    .use(
      express.static(
        path.join(__dirname, "..", "node_modules", "bootstarp", "dist")
      )
    )
    .use(
      express.static(path.join(__dirname, "..", "node_modules", "font-awesome"))
    );
};
//End of Exports statics
