
const testHost = 'http://localhost:3000';
const fetch = require("node-fetch");
const sql = require("./../models/db.js");

test('al ingresar a la ruta / responde 200', async () => {
   await fetch(testHost).then(res => {
    expect(res.status).toEqual(200)
  })
});


test('debe retornar el estado 401 por desautorización', async () => {
    await fetch(testHost+'/cambio').then(res => {
      expect(res.status).toEqual(401)
    })
});



