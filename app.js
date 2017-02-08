var express = require('express');  // express is an application
var bodyParser = require('body-parser');
var app = express();
var jsonParser = bodyParser.json();

var apiController = require('./controllers/apiController');
apiController(app);

var htmlController = require('./controllers/htmlController');
htmlController(app);

var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {
  console.log('Request Url: ', req.url);
  next();
});

app.get('/', function(req, res) {
  res.render('index');
});




app.listen(port);
