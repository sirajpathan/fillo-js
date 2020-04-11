import {importExceltoJson} from "./lib/utils";
import {query} from "./lib/query";


 function filo(dataFile) {console.log('test successful');
    let db;
    this.init = function(cb) {
        importExceltoJson(dataFile, (err, data) => {
            console.log(data);
            db = data.db;
            cb();
        });
    }
    this.query = function(str, params) {
        return query(db, str, params);
    }
    this.test = function(str, params) {
        return 'test successfull';
    }
}
export default filo;