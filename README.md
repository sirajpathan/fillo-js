# fillo-js ![Node.js CI](https://github.com/sirajpathan/fillo-js/workflows/Node.js%20CI/badge.svg?branch=master&event=status)

This Module is replication of Java library Fillo. It is used to query data from excel file.
It uses sqlite3 and read-excel-file to create in memory database from excel file.

## Quickstart - Node.js
`npm install fillo-js`

### Example of how to use this module:

```javascript
let fillo = require('fillo-js').default;
let f = new fillo('./test.xlsx');
f.init(function() {
    f.query('select * from test')
    .then(data => {
        console.log(data);
    })
});
```
