const express = require('express');

exports = module.exports = (settings) => {
    let app = express();

    const PORT = settings.http.port;
    const HOST = settings.http.host;

    app.use(express.urlencoded({extended: true}));
    app.use(express.json());

    // testing
    app.get('/getOK', (req, res) => {
        res.send('OK');
    });

    return {
        start() {
            app.listen(PORT, () => console.log(`Server is up on ${HOST}:${PORT}`));
        }
    }
}

exports['@singleton'] = true;
exports['@async'] = false;
exports['@require'] = ['lib/config/settings'];