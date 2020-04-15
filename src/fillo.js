import {importExceltoJson, updateXls} from "./lib/utils";
import {query} from "./lib/query";


function filo (options) {
    let {
        dataFile,
        tableName = "fillo_table"
    } = options;
    let db;
    let updateDataFile = () => {
        return query(db, `SELECT * FROM ${tableName}`)
            .then(json => {
                return updateXls(json);
            });

    };
    this.init = function (cb) {
        importExceltoJson(dataFile, tableName, (err, data) => {
            db = data.db;
            cb();
        });
    };
    this.query = function (str, params) {
        return query(db, str, params)
            .then(updateDataFile);
    };
}
export default filo;
