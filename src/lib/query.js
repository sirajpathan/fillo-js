export function query (db, str, params) {
    const op = str.match(/^(\w)+/g)[0].toLowerCase();
    switch (op) {
        case "select":
            return select(db, str, params);
        case "insert":
            return insert(db);
        default:
            return Promise.reject('Incorrect query');
    }
}

export function select (db, str, params = []) {
    return new Promise((resolve, reject) => {
        db.serialize(function() {
            let data = [];
            db.each(str, function(err, row) {
                console.log(row.id + ": " + row.info);
                data.push(row);
            }, () => {
                resolve(data);
            });
        });
    });
}

export function insert (str, params) {
    return new Promise((resolve, reject) => {
        db.serialize(function() {
            db.run("INSERT INTO foo VALUES (?)", 1, function() {
                // These queries will run in parallel and the second query will probably
                // fail because the table might not exist yet.
                db.run("CREATE TABLE bar (num)");
                db.run("INSERT INTO bar VALUES (?)", 1);
            });
        });
    });
}