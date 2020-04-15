import readXlsxFile from "read-excel-file/node";
import fs from "fs";
import {connectDB} from "./db";
import json2xls from "json2xls";

export function importExceltoJson (excelFile, tableName, done) {
    const excel = fs.createReadStream(excelFile);
    readXlsxFile(excel)
        .then((rows) => {
            let columns = rows.shift();
            let data = [];
            rows.map((row, i) => {
                data[i] = {};
                columns.map((key, j) => data[i][key] = row[j]);
            });
            connectDB(data, tableName, done);
        });
}

export function updateXls (json) {
    const xls = json2xls(json);
    fs.writeFileSync("data.xlsx", xls, "binary");
}
