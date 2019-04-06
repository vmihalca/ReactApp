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
        }
    }
}

exports['@singleton'] = true;
exports['@async'] = false;
exports['@require'] = ['model/index'];