var mysql = require('mysql');

exports.showTables = function (err, connection, database, callback) {
  var args = Array.prototype.slice.call(arguments);;
  err = args.shift();
  callback = args.pop();

  if (args.length > 0) {
    connection = args.shift();
  }
  else {
    connection = undefined;
  }

  if (args.length > 0) {
    database = args.shift();
  }
  else {
    database = undefined;
  }

  if (err) {
    return callback(err);
  }

  var tables = [];

  if (database === undefined) {
    connection.query('SHOW tables', function (err, rows) {
      rows.forEach(function (row) {
        tables.push(row[Object.keys(row)[0]]);
      });
      callback(null, tables);
    });
  }
  else {
    connection.query('SHOW tables FROM' + mysql.escapeId(database), function (err, rows) {
      if (err) throw err;

      rows.forEach(function (row) {
        tables.push(row[Object.keys(row)[0]]);
      });
      callback(null, tables);
    });
  }
}
