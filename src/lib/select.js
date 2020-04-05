import {breakQuery} from "./utils";

export function select (str) {
    console.log(str);
    let [columns, table, where] = breakQuery(str);
    console.log(columns, table, where);
}