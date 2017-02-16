var express = require('express'), load = require('express-load');
var app = express();


load('models')
	.then('middlewares')
	.then('controllers')
	.then('routes')
	.into(app);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});