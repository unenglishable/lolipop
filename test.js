var lolipop = require('./lolipop');
var config = require('./config.json');
var lp = lolipop(config);
var async = require('async');
var through2 = require('through2');

var tests = {
  getTables: function (callback) {
           lp.getTables(null, function (err, tables) {
             if (err) {
               throw err;
             }

             console.log('testGetTables:\n'+tables);
             callback();
           });
         },
  getColumns: function (callback) {
            lp.getColumns(null, 'test_table', function (err, columns) {
              if (err) {
                throw err;
              }

              console.log('testGetColumns:');
              console.log(columns);
              callback();
            });
          },
  rowStream: function (callback) {
           var rowStream = lp.createRowStream(null, 'test_table');
           var rowStreamT2 = through2.obj(function (row, enc, cb) {
             console.log('testRowStream: ');
             console.log(row.percent);
             cb();
           },
           function () {
             callback();
           });
           rowStream.pipe(rowStreamT2);
         },

  rowStreamWhere: function (callback) {
            var rowStreamWhere = lp.createRowStreamWhere(null, 'test_table', { percent: 10 });
            var rowStreamWhereT2 = through2.obj(function (row, enc, cb) {
              console.log('testRowStreamWhere: ' + row.percent);
              cb();
            },
            function () {
              callback();
            });
            rowStreamWhere.pipe(rowStreamWhereT2);
          }
}

async.parallel(tests, function (err, results) {
  lp.end();
});
