var express = require('express'), load = require('express-load');
var app = express();


load('controllers')
	.then('routes')
	.then('models')
	.then('middlewares')
	.into(app);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});