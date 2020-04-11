import readXlsxFile from 'read-excel-file/node';
import fs from 'fs';
import {connectDB} from './db';

export function importExceltoJson (excelFile, done) { 
    const excel = fs.createReadStream(excelFile);
    readXlsxFile(excel)
        .then((rows) => {
            let columns = rows.shift();
            let data = [];
            rows.map((row, i) => {
                data[i] = {};
                columns.map((key, j) => data[i][key] = row[j]);
            });
            connectDB(data, done);
        })
}