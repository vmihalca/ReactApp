const Joi = require('joi');

exports = module.exports = () => {
    return {
        userLogin() {
            return {
                userName: Joi.string().required(),
                password: Joi.string().required() 
            }
        }
    }
}
exports['@singleton'] = true;
exports['@async'] = false;