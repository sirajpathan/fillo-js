let data = require("./data.json");
console.log("data");


str = "select * from data";
insert = "insert into data(author) values('Siraj')";
update = "update data set author='Pathan', price=12 where author='Siraj'"

const p = {
    splitQuery (str) {
        str = str.trim();
        let index = str.indexOf(' ');
        return [str.substr(0, index).toLowerCase(), str.substr(index, str.length)];
    },
    breakQuery (str) {
        let fromIndex = str.toLowerCase().indexOf(' from ');
        let whereIndex = str.toLowerCase().indexOf(' where ');
        let where = whereIndex >= 0 ? "" : "";
        return [str.substr(0, fromIndex), str.substr(index, str.length).trim(), where];
    }
};
class Fillo {
    constructor (dataFile) {
        this.data = dataFile;
    }
    query (str) {
        let [operation, query] = p.splitQuery(str);

        switch (operation) {
            case "select":
                this.select(query);
                break;
            case "insert":
                this.select(query);
                break;
        }
    }
    select (str) {
        console.log(str);
        let [columns, table, where] = p.breakQuery(str);
        console.log(columns, table, where);
    }
}

let fillo = new Fillo();
fillo.query("select * from books");