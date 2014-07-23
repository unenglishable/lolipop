var lolipop = require('./lolipop');
var config = require('./config');

lolipop.showTables(null, config['lolipopdb'], function (err, tables) {
  if (err) {
    throw err;
  }

  console.log('Tables:\n'+tables);
});
