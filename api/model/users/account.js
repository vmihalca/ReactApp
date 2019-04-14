exports = module.exports = (db) => {
    return {
        getUser() {
            return new Promise((resolve, reject) => {
                db.query('SELECT * FROM account WHERE userid=1', (err, result) => {
                    if(err) {
                        return reject(err);
                    }
                    return resolve(result);
                });
            })
        },
        findUserByName(userName) {
            const stmt = `SELECT username FROM account WHERE username='${userName}'`;
            return new Promise((resolve, reject) => {
                db.query(stmt, (err,result) => {
                    if(err) {
                        return reject(err);
                    }
                    return resolve( JSON.parse(JSON.stringify(result)).rows  );
                })
            })
        },
        createNewUser(user) {
            const stmt = `INSERT INTO account (username, useremail, created_on) VALUES ('${user.userName}', '${user.userEmail}', '${user.created_on}');`;

            return new Promise((resolve, reject) => {
                db.query(stmt, (err,result) => {
                    if(err) {
                        return reject(err);
                    }
                    return resolve( JSON.parse(JSON.stringify(result)).rows  );
                })
            })
        }
    }
}

exports['@singleton'] = true;
exports['@async'] = false;
exports['@require'] = ['model/index'];