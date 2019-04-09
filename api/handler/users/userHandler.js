exports = module.exports = (userService) => {
    return {
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