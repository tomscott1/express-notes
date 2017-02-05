var express = require('express');  // express is an application
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.send('<html><head><link href = assets/style.css type=text/css rel=stylesheet></head><body>Hello World</body>');
});

app.get('/person/:id', function(req, res) {
  res.send('<html><head></head><body>Person: ' +
  req.params.id + '</body>');
});

app.get('/api', function (req, res) {
  res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);
