const express = require('express');
const logger = require('morgan');

exports = module.exports = (settings, userHandler, mid, auth) => {
    let app = express();

    const PORT = settings.http.port;
    const HOST = settings.http.host;

    app.use(logger('dev'));
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());

    app.post('/login', userHandler.login);
    app.post('/register', userHandler.register);
    app.get('/getuser', auth.validateToken, userHandler.getUser);

    // app.use(mid.errorHandler);

    return {
        start() {
            app.listen(PORT, () => console.log(`Server is up on ${HOST}:${PORT}`));
        }
    }
}

exports['@singleton'] = true;
exports['@async'] = false;
exports['@require'] = [
    'lib/config/settings', 
    'handler/users/userHandler',
    'middleware/errorHandler',
    'lib/authorization'
];