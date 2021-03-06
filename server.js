// heroku in stark-citadel-26659
// github in web-server
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3010;

var middleware = require('./middleware.js');
//app.use(middleware.requireAuthentication);
app.use(middleware.logger);
//
//about
app.get('/about', middleware.requireAuthentication, function (req, res) {
  res.send('About us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
  console.log('Express server ' + PORT + ' started!');
});
