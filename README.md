# fillo-js
This Module is replication of Java library Fillo. It is used to query data from excel file.
This module uses sqlite3 and read-excel-file to create in memory database from excel file

Example of how to use this module:

let fillo = require('fillo').default;
let f = new fillo('./test.xlsx');
//console.log(f.init());
f.init(function() {
    f.query('select * from test')
    .then(data => {
        console.log(data);
    })
});