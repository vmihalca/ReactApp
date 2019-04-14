const Joi = require('joi');

exports = module.exports = (responses, userModel, userValidation, auth) => {
    return {
        async login(user) {
            const validation = Joi.validate(user, userValidation.userLogin());

                if( validation.error === null) {
                    let foundUser = await userModel.findUserByName(user.userName);

                    if(foundUser.length > 0) {
                        
                        let token = await auth.createToken(user);

                        let newUser = {
                            user: foundUser[0].username,
                            token: token,
                        };

                        return responses.onSuccess(newUser);
                    } 
                    return responses.onFailure('User not found');
                }
                return responses.onFailure('Format invalid');
        },
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
exports['@require'] = [
    'lib/responses', 
    'model/users/account',
    'lib/validations/userValidation',
    'lib/authorization']