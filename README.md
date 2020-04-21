
# fillo-js
![CI](https://github.com/sirajpathan/fillo-js/workflows/CI/badge.svg?branch=master&event=push)

This Module is replication of Java library Fillo. It is used to query data from excel file.
It uses sqlite3 and read-excel-file to create in memory database from excel file.

## Quickstart - Node.js
`npm install fillo-js`

### Example of how to use this module:

```javascript
let fillo = require('fillo-js').default;

const options = {
    dataFile: './test.xlsx',
    tableName: 'my_table'
}
let f = new fillo(options);

f.init(function() {
    f.query('SELECT * FROM my_table')
    .then(data => {
        console.log(data);
    })
});

```

## Some more query examples

```javascript
f.query("SELECT * FROM my_table WHERE id='1'")
f.query("SELECT * FROM my_table WHERE id=?", [1])
f.query("INSERT into my_table VALUES(?, ?)", [1, 'new name'])
f.query("UPDATE my_table SET name = ? WHERE id = ?", ['new name', 1]) 
```

### Pending features
* Comparisons like greater than (>) and less than (<) are not added
