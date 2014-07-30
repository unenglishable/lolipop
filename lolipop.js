var mysql = require('mysql');

var Lolipop = module.exports = function Lolipop(config) {
  if (!(this instanceof Lolipop)) {
    return new Lolipop(config);
  }
  this.connection = mysql.createConnection(config);
}

Lolipop.prototype.getTables = function (err, callback) {
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

Lolipop.prototype.getColumns = function (err, table, callback) {
  if (err) {
    return callback(err);
  }

  this.connection.query('SHOW columns FROM ' + mysql.escapeId(table), function (err, rows) {
    if (callback && typeof(callback) === "function") {
      callback(null, rows);
    }
  });
}

Lolipop.prototype.createRowStream = function (err, table) {
  return this.connection.query('SELECT * FROM ' + mysql.escapeId(table)).stream();
}

Lolipop.prototype.createRowStreamWhere = function (err, table, obj) {
  return this.connection.query('SELECT * FROM ' + mysql.escapeId(table) + ' WHERE ' + mysql.escape(obj)).stream();
}

Lolipop.prototype.end = function (callback) {
  if (callback && typeof(callback) === "function") {
    this.connection.end(callback());
  }
  else {
    this.connection.end();
  }
}
