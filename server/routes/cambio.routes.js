module.exports = app => {
  const cambioCtl = require("../controllers/cambio.controller.js");
  app.post("/cambio", cambioCtl.getCurrency);
};
