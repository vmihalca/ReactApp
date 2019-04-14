const jwt = require("jsonwebtoken");

exports = module.exports = () => {
  return {
    async createToken(user) {
      return jwt.sign({ user: user.username }, user.email, {
        expiresIn: 60 * 60
      });
    },
    validateToken(req, res, next) {
      let token = req.headers.authorization.slice(7);
      let email = req.headers.email;
      try {
        jwt.verify(token, email);
        next();
      } catch (error) {
        next(error);
      }
    }
  };
};

exports["@singleton"] = true;
exports["@async"] = false;
