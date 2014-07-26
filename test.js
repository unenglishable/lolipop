var lolipop = require('./lolipop');
var config = require('./config.json');
var lp = lolipop(config);

lp.showTables(null, function (err, tables) {
  if (err) {
    throw err;
  }

  console.log('Tables:\n'+tables);
});

lp.showColumns(null, 'test_table', function (err, columns) {
  if (err) {
    throw err;
  }

  console.log('Columns:\n'+columns);
});

var rowStream = lp.streamRows(null, 'test_table');
rowStream.on('error', function (err) {
  console.error(err)
})
.on('result', function(row) {
  console.log(row.Field);
});

lp.end();
