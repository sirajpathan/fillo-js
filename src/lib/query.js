export function query (db, str, params) {
    const op = str.match(/^(\w)+/g)[0].toLowerCase();
    switch (op) {
        case "select":
            return select(db, str, params);
        case "insert":
            return insertOrUpdate(db, str, params);
        case "update":
            return insertOrUpdate(db, str, params);
        default:
            return Promise.reject("Incorrect query");
    }
}

export function select (db, str, params = []) {
    return new Promise((resolve, reject) => {
        db.serialize(function () {
            let data = [];
            db.each(str, params, function (err, row) {
                data.push(row);
            }, () => {
                resolve(data);
            });
        });
    });
}

export function insertOrUpdate (db, str, params = []) {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.run(str, params, err => err ? reject(err) : resolve("success"));
        });
    });
}
