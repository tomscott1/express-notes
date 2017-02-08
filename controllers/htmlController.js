var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

module.exports = function(app) {
  app.get('/person/:id', function(req, res) {
    res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
  });

  app.post('/person/', urlencodedParser, function(req, res) {
    res.send('Thank You!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
  });

  app.post('/personjson', jsonParser, function(req, res) {
    res.send('Thank you for the JSON data');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
  })

  app.get('/api', function (req, res) {
    res.json({ firstname: 'John', lastname: 'Doe' });
  });
};
