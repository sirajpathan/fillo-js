import assert from "assert";
import Fillo from "../../src/fillo.js";
const tableName = "fillo_table";
let fillo;

describe("Fillo", () => {

    test("Create DB connection", (done) => {
        fillo = new Fillo({
            dataFile: "./test/mock-data/test.xlsx"
        });
        fillo.init(function () {
            fillo.query(`SELECT * from ${tableName}`)
                .then((data) => {
                    assert.equal(data.length, 4);
                    done();
                });
        });
    });

    test("Insert data into the table", (done) => {
        fillo.query(`INSERT into ${tableName} VALUES(?, ?)`, [6, "Ed Sheeran"])
            .then(() => {
                fillo.query(`SELECT * from ${tableName}`)
                    .then(data => {
                        assert.equal(data[data.length - 1].name, "Ed Sheeran");
                        done();
                    });
            });
    });
});
