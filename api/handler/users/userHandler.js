exports = module.exports = (userService) => {
    return {
        async login(req, res, next) {
            let body = req.body;
            try {
                let user = await userService.login(body);
                
                res.send(user);
            } catch (error) {
                next(error);
            }
        },
        async getUser(req, res, next) {
            try {
                let user = await userService.getUser();

                res.send(user);
            } catch (error) {
                next(error)
            }
        }
    }
}
exports['@singleton'] = true;
exports['@async'] = false;
exports['@require'] = ['service/users/userService']