exports = module.exports = (responses) => {
    return {
        errorHandler(req, res ,next, error) {
            if (!error.statusCode) res.status(500).send(responses.onFailure('asd'));
			res.status(error.statusCode).send(responses.onFailure(err.message));
        }
    }
}

exports['@singleton'] = true;
exports['@async'] = false;
exports['@require'] = ['lib/responses'];
