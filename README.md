lolipop
=======

A utility to make calls to mysql through nodejs (somewhat) more modular.


Configuration
-------------

The config passed to a method is the information used by node-mysql to connect
to a mysql database.  You can define this on the fly or use a config.js module
like the included example [config_example.js](./config_example.js)

In the example config:
To connect to a mysql database, set environment variables:

~~~~
LOLIPOP_HOST // The host to connec to
LOLIPOP_USER // The user to connect as
LOLIPOP_PASS // The password for the user
LOLIPOP_DB   // The database to connect to
~~~~

OR change the config.js yourself


Showing tables
--------------

~~~~
var lolipop = require('path_to_lolipop');
var config = require('./config');

lolipop.showTables(err, config['lolipopdb'], callback(err, tables));
~~~~
