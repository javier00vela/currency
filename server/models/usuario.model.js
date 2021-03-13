const sql = require("./db.js");

// constructor
const Usuario = function(usuario) {
  // this.nombres = usuario.nombres;
  // this.apellidos = usuario.apellidos;
  // this.identificacion = usuario.identificacion;
  // this.contrasena = usuario.contrasena;
};

Usuario.create = (usuario, result) => {
  sql.query(`INSERT INTO usuario SET nombres = '${usuario.nombres}' ,apellidos = '${usuario.apellidos}'  ,usuario = '${usuario.usuario}' ,contrasena = '${usuario.contrasena}'`, usuario, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created usuario: ", { id: res.insertId, ...usuario });
    result(null, { id: res.insertId, ...usuario });
  });
};

Usuario.getAll = result => {
  sql.query("SELECT * FROM usuario", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("usuario: ", res);
    result(null, res);
  });
};


Usuario.getAuthUser = (usuario ,  result) => {
  console.log(`SELECT  nombres , apellidos , usuario FROM usuario where  usuario = '${usuario.usuario}' and contrasena = '${usuario.contrasena}'`);
  sql.query(`SELECT  nombres , apellidos , usuario FROM usuario where  usuario = '${usuario.usuario}' and contrasena = '${usuario.contrasena}'`, (err, res) => {
    if (err) {
    
      result(null, err);
      return;
    }

    console.log("usuario: ", res);
    result(null, res);
  });
};

Usuario.findIdentification = (usuario ,  result) => {
  sql.query(`SELECT  usuario FROM usuario where  usuario = '${usuario.usuario}' and contrasena = '${usuario.contrasena}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("usuario: ", res);
    result(null, res);
  });
};





module.exports = Usuario;
