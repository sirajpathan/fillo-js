let data = require("./data.json");
import {splitQuery} from "./lib/utils";
import {select} from "./lib/select";
console.log("data");


let str = "select * from data";
//select * from books where price==8.95 && title=='test'
// let str = "select category, author from data";
// let str = "select category, author from data where price=8.95";
// let str = "select category, author from data where price='8.95'";
let insert = "insert into data(author) values('Siraj')";
let update = "update data set author='Pathan', price=12 where author='Siraj'"

export default class Fillo {
    constructor (dataFile) {
        this.data = dataFile;
    }
    query (str) {
        let [operation, query] = splitQuery(str);

        switch (operation) {
            case "select":
                select(query);
                break;
            // case "insert":
            //     this.select(query);
            //     break;
        }
    }
    // select (str) {
    //     console.log(str);
    //     let [columns, table, where] = p.breakQuery(str);
    //     console.log(columns, table, where);
    // }
}