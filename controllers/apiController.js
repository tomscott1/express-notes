var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

module.exports = function(app) {
  app.get('/api/person:id', function (req, res) {
    // get the data from databsae
    res.json({ firstname: 'John', lastname: 'Doe' });
  });

  app.post('/api/person', jsonParser, function (req, res) {
    // save to the database
    res.json({ firstname: 'John', lastname: 'Doe' });
  });

  app.delete('/api/person/:id', function (req, res) {
    // delete from the database
  });
};
