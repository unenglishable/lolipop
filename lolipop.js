var mysql = require('mysql');

var Lolipop = function Lolipop(config) {
  if (!(this instanceof Lolipop)) {
    return new Lolipop(config);
  }
  this.connection = mysql.createConnection(config);
}

Lolipop.prototype.showTables = function (err, callback) {
  if (err) {
    return callback(err);
  }

  var tables = [];

  this.connection.query('SHOW tables', function (err, rows) {
    rows.forEach(function (row) {
      tables.push(row[Object.keys(row)[0]]);
    });
    callback(null, tables);
  });
}

Lolipop.prototype.showColumns = function (err, table, callback) {
  if (err) {
    return callback(err);
  }

  this.connection.query('SHOW columns FROM ' + mysql.escapeId(table), function (err, rows) {
    if (callback && typeof(callback) === "function") {
      callback(null, rows);
    }
  });
}

Lolipop.prototype.streamRows = function (err, table) {
  return this.connection.query('SELECT * FROM ' + mysql.escapeId(table));
}

Lolipop.prototype.end = function (callback) {
  if (callback && typeof(callback) === "function") {
    this.connection.end(callback());
  }
  else {
    this.connection.end();
  }
}

module.exports = Lolipop;
