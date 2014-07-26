var mysql = require('mysql');
var config = require('./config');
var dbConfig = config.lolipopdb;
var connection = mysql.createConnection(dbConfig);

exports.showTables = function (err, callback) {
  if (err) {
    return callback(err);
  }

  var tables = [];

  connection.query('SHOW tables', function (err, rows) {
    rows.forEach(function (row) {
      tables.push(row[Object.keys(row)[0]]);
    });
    callback(null, tables);
  });
}

exports.showColumns = function (err, table, callback) {
  if (err) {
    return callback(err);
  }

  connection.query('SHOW columns FROM ' + mysql.escapeId(table), function (err, rows) {
    if (callback && typeof(callback) === "function") {
      callback(null, rows);
    }
  });
}

exports.streamRows = function (err, table) {
  return connection.query('SELECT * FROM ' + mysql.escapeId(table));
}

exports.end = function (callback) {
  if (callback && typeof(callback) === "function") {
    connection.end(callback());
  }
  else {
    connection.end();
  }
}
