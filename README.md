lolipop
=======

A utility to make calls to mysql through nodejs (somewhat) more modular.

Using
-----

~~~~
var lolipop = require('path_to_lolipop');
~~~~

Showing tables
--------------

~~~~
lolipop.showTables(err, connection, [database, ] callback(tables));
~~~~

`connection` is a [node-mysql] (https://github.com/felixge/node-mysql 
"node-mysql") object that has already been connected with the
`connection.connect()` method.  `tables` is an array containing the table names
in the database. Optional argument `database` provides the database name as a
string if it was not already specified in when initializing the connection.
