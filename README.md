lolipop
=======

A utility to make calls to mysql through nodejs (somewhat) more modular.

Using
-----

~~~~
var lolipop = require('path_to_lolipop');
~~~~

Configuration
-------------

To connect to a mysql database, set environment variables:

~~~~
LOLIPOP_HOST // The host to connec to
LOLIPOP_USER // The user to connect as
LOLIPOP_PASS // The password for the user
LOLIPOP_DB   // The database to connect to
~~~~


Showing tables
--------------

~~~~
lolipop.showTables(err, callback(err, tables));
~~~~

Database connection is now defined in [config.js](./config.js).
