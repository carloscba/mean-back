var app = require('../server');
var DataSource = require('loopback-datasource-juggler').DataSource;
var connector = require('loopback-connector-mongodb');

module.exports = function(options) {
  return function(req, res, next) {
    var db = new DataSource(connector, {
        "db": {
          "connector": "loopback-connector-mongodb",
          "url": "mongodb://mean:m21nb1ck@ds135714.mlab.com:35714/heroku_5nwl0hcn"
        }
    });
    app.models.User.attachTo(app.datasources.db);
    app.models.Country.attachTo(app.datasources.db);
    next();
  }
}