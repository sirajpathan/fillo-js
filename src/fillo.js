import {importExceltoJson, updateXls} from "./lib/utils";
import {query} from "./lib/query";


 function filo(options) {
    let {
        dataFile,
        tableName = 'fillo_table',
        outputfile = './data.xlsx'
    } = options;
    let db;
    this.init = function(cb) {
        importExceltoJson(dataFile, tableName, (err, data) => {
            console.log(data);
            db = data.db;
            cb();
        });
    }
    this.query = function(str, params) {
        return query(db, str, params)
            .then(updateDataFile);
    }
    
    let updateDataFile = (data) => {
        return query(db, `SELECT * FROM ${tableName}`)
            .then(json => {
                return updateXls(json);
            });
        
    }
}
export default filo;