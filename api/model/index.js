const {Client} = require('pg');

exports = module.exports = (settings) => {
    const client = new Client({
        user: settings.db.user,
        host: settings.db.host,
        database: settings.db.database,
        password: settings.db.password,
        port: settings.db.port,
    });

    client.connect();

    return client;
}

exports['@singleton'] = true;
exports['@async'] = false;
exports['@require'] = ['lib/config/settings']