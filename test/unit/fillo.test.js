import Fillo from "../../src/fillo.js";
const tableName = "fillo_table";


describe("Fillo", () => {

    test("Create DB connection", (done) => {
        let f = new Fillo({
            dataFile: "./test/mock-data/test.xlsx"
        });
        f.init(function () {
            f.query(`select * from ${tableName}`)
                .then(() => {
                    done();
                });
        });
    });
});
