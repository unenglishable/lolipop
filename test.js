var lolipop = require('./lolipop');

lolipop.showTables(null, function (err, tables) {
  if (err) {
    throw err;
  }

  console.log('Tables:\n'+tables);
});
