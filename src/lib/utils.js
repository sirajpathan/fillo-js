export function splitQuery (str) {
    str = str.trim();
    let index = str.indexOf(' ');
    return [str.substr(0, index).toLowerCase(), str.substr(index, str.length).trim()];
};

function getTableAndColumns (str) {
    const from = ' from ';
    if (str.indexOf(from) === -1) {
        throw new Error('Query must contain \'from\' key');
    }
    const data = str.split(from);
    return [data[0].trim(), data[1].trim()];
}

export function breakQuery (str) {console.log(str);
    const where = ' where ';
    let query = str;
    let whereStr = "";
    if (str.indexOf(where) >= 0) {
        [query, whereStr] = str.split(where);
    }
    console.log('query: ' + query);
    console.log('whereStr: ' + whereStr);
    
    let [columns, table] = getTableAndColumns(query);

    console.log('columns: ' + columns);
    console.log('table: ' + table);

    return {columns, table, whereStr};
}

function parseWhereString (str) {
    /*
        price=8.95
        `price`=8.95 AND `title`="The Lord price= of the Rings" 
        price=8.95 OR title="The Lord of the Rings"
        price>8.95 OR title="The Lord of the Rings"

    */
}
function parseQuery(obj){
    return Function('"use strict";return (' + obj + ')')();
}
export function parseWhereTemplate (str, data) {
    //let str = '`price`=8.95 AND `title`="The Lord price= of the Rings"';
    str = str.replace(/[`](\s)?[=]/g, '`==');
    str = str.replace(/(\s)(AND)(\s)[`]/g, '&& `');
    let key = '';
    str.match(/[`](\w)*[`]/g).map(column => {
        key = column.replace(/[`]/g, '');
        str = str.replace(column, data[key]);
    });
    console.log(str);
    
    return parseQuery(str);
}