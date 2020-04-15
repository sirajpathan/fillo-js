import sqlite3 from "sqlite3";
var db = new sqlite3.Database(":memory:");

export function connectDB (data, tableName, cb) {
    db.serialize(function () {
        const columns = Object.keys(data[0]);
        const columnString = columns.map(key => `${key} TEXT`).join();
        db.run(`CREATE TABLE ${tableName} (${columnString})`);
        const params = Array(columns.length).fill("?").join();
        var stmt = db.prepare(`INSERT INTO ${tableName} VALUES (${params})`);
        data.map(item => {
            stmt.run(...Object.values(item));
        });
        stmt.finalize();
        cb(null, {
            message: "Table created from excel file",
            db
        });
    });

}

export function closeDB () {
    db.close();
}
