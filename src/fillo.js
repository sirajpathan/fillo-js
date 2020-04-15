import {importExceltoJson, updateXls} from "./lib/utils";
import {query} from "./lib/query";


function filo (options) {
    let {
        dataFile,
        tableName = "fillo_table"
    } = options;
    let db;

    this.init = function (cb) {
        importExceltoJson(dataFile, tableName, (err, data) => {
            db = data.db;
            cb();
        });
    };

    let updateDataFile = (data) => {
        return query(db, `SELECT * FROM ${tableName}`)
            .then(json => {
                return updateXls(json);
            })
            .then(() => data);

    };

    this.query = function (str, params) {
        return query(db, str, params)
            .then(updateDataFile);
    };
}
export default filo;
