exports = module.exports = (responses, userModel) => {
    return {
        async getUser() {
            let user;
            try {
                user = await userModel.getUser();
                
                return responses.onSuccess(user.rows);
            } catch (error) {
                return responses.onFailure(error);
            }

        }
    }
}

exports['@singleton'] = true;
exports['@async'] = false;
exports['@require'] = ['lib/responses', 'model/users/account']