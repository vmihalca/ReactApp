exports = module.exports = () => {
    return {
        onSuccess(data) {
            return {
                data: data,
                success: true
            }
        },
        onFailure(msg) {
            return {
                message: msg,
                success: false
            }
        }
    }
}

exports['@singleton'] = true;
exports['@async'] = false;
