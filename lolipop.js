var mysql = require('mysql');

exports.showTables = function (err, config, callback) {
  if (err) {
    return callback(err);
  }

  var connection = mysql.createConnection(config['lolipopdb']);
  var tables = [];

  connection.query('SHOW tables', function (err, rows) {
    rows.forEach(function (row) {
      tables.push(row[Object.keys(row)[0]]);
    });
    callback(null, tables);
  });

  connection.end();
}
