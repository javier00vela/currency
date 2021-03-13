const env = require("../config/env.js");
const fetch = require("node-fetch"); 
const keyValue = env.keyCurrency;

//obtendremos la informacion del api
exports.getCurrency =  (req, res) => {
  const currency = {
      amount : req.params.amount,
      from : req.params.from,
      get : req.params.get
  }
  var data = [];

   fetch(`http://api.currencylayer.com/live?access_key=${keyValue}&from=${currency.from}&to=${currency.get}&amount=${currency.amount}`).then((res)=>console.log(res) );
    
  res.send(data);

};
