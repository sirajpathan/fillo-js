import assert from "assert";
import {importExceltoJson} from "../../src/lib/utils.js";
import {query} from "../../src/lib/query.js";
const tableName = "fillo_table";
let db;

describe("Select", () => {

    test("Create DB connection", (done) => {
        importExceltoJson("./test/mock-data/test.xlsx", tableName, function (err, data) {
            if (!err) {
                assert.equal(data.message, "Table created from excel file");
                db = data.db;
            }
            done(err);
        });
    });

    test("Get table data", (done) => {
        query(db, `SELECT * FROM ${tableName}`)
            .then(data => {
                assert.equal(data.length, 4);
                done();
            })
            .catch(done);
    });

    test("Get table data with WHERE clause", (done) => {
        query(db, `SELECT * FROM ${tableName} WHERE id='1'`)
            .then(data => {
                assert.equal(JSON.stringify(data), JSON.stringify([{id: "1", name: "tylor"}]));
                done();
            })
            .catch(done);
    });
});


describe("UPDATE", () => {

    test("Get table data", (done) => {
        query(db, `UPDATE ${tableName} SET name = ? WHERE id = ?`, ["Tylor Swift", 1])
            .then(data => {
                assert.equal(data, "success");
                done();
            })
            .catch(done);
    });

    test("Get table data with WHERE clause", (done) => {
        query(db, `SELECT * FROM ${tableName} WHERE id='1'`)
            .then(data => {
                assert.equal(data[0].name, "Tylor Swift");
                done();
            })
            .catch(done);
    });
});

describe("INSERT", () => {

    test("insert data into the table", (done) => {
        query(db, `INSERT into ${tableName} VALUES(?, ?)`, [5, "zayn"])
            .then(data => {
                assert.equal(data, "success");
                return query(db, `SELECT * FROM ${tableName} WHERE id='5'`);
            })
            .then(data => {
                assert.equal(data[0].name, "zayn");
                done();
            })
            .catch(done);
    });
});

describe("DELETE", () => {

    test("delete data from the table", (done) => {
        query(db, `DELETE from ${tableName} WHERE id=?`, [1])
            .then(data => {
                assert.equal(data, "success");
                return query(db, `SELECT * FROM ${tableName}`);
            })
            .then(data => {
                assert.equal(data[0].name, "bruce");
                done();
            })
            .catch(done);
    });
});
