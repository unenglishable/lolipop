var lolipop = require('./lolipop');
var config = require('./config.json');
var lp = lolipop(config);

lp.getTables(null, function (err, tables) {
  if (err) {
    throw err;
  }

  console.log('Tables:\n'+tables);
});

lp.getColumns(null, 'test_table', function (err, columns) {
  if (err) {
    throw err;
  }

  console.log('Columns:\n'+columns);
});

var rowStream = lp.createRowStream(null, 'test_table');
rowStream.on('error', function (err) {
  console.error(err)
})
.on('result', function(row) {
  console.log(row);
});

var rowStreamWhere = lp.createRowStreamWhere(null, 'test_table', { percent: 10 });
rowStreamWhere.on('error', function (err) {
  console.error(err)
})
.on('result', function(row) {
  console.log('test: ' + row.percent);
});

lp.end();
