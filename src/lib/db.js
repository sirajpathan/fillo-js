import sqlite3 from 'sqlite3';
var db = new sqlite3.Database(':memory:');

export function connectDB (data, cb) {   
    const tableName = 'test'; 
    db.serialize(function() {
        const columns = Object.keys(data[0]);
        const columnString = columns.map(key => `${key} TEXT`).join();
        db.run(`CREATE TABLE ${tableName} (${columnString})`);
        console.log("DB created");
        console.log(data[0]);
        const params = Array(columns.length).fill('?').join();
        console.log(params);
        var stmt = db.prepare(`INSERT INTO ${tableName} VALUES (${params})`);
        data.map(item => {
            stmt.run(...Object.values(item));
        });console.log("1DB created");
        stmt.finalize();
        db.each(`SELECT * FROM ${tableName}`, function(err, row) {
            console.log(row);
        }, () => {
            cb(null, {
                message: "Table created from excel file",
                db
            });
        });
    });
 
}

export function closeDB () {
    db.close();
}