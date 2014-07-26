lolipop
=======

A utility to make calls to mysql through nodejs (somewhat) more modular.

Configuration
-------------

Configuration can be stored in a json file.

<h3>config.json</h3>
~~~~
{
  "host" : "localhost",
  "user" :  "lolipop",
  "password" :  "",
  "database" : "lolipoptest"
}
~~~~

Instantiation
-------------

~~~~
var config = require('./config.json');
var lolipop = require('./lolipop');
var lp = lolipop(config);
~~~~


The config is used by node-mysql to connect to a mysql database.
You can define this in the config.json file
like the included example [config.json](./config.json)


Closing
-------

You should always close the connection using:
~~~~
...
lp.end();
~~~~


Showing tables
--------------

~~~~
var config = require('./config.json');
var lolipop = require('./lolipop');
var lp = lolipop(config);

lp.showTables(err, callback(err, tables));
~~~~
