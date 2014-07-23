var mysql = require('mysql');
var config = require('./config');
var dbConfig = config.lolipopdb;

exports.showTables = function (err, callback) {
  if (err) {
    return callback(err);
  }

  var connection = mysql.createConnection(dbConfig);
  var tables = [];

  connection.query('SHOW tables', function (err, rows) {
    rows.forEach(function (row) {
      tables.push(row[Object.keys(row)[0]]);
    });
    callback(null, tables);
  });

  connection.end();
}
