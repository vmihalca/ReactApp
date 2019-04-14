const jwt = require("jsonwebtoken");

exports = module.exports = () => {
  return {
    async createToken(user) {
      return jwt.sign({user: user.userName,}, user.password, { expiresIn: 60 * 60 });
    }
  };
};

exports["@singleton"] = true;
exports["@async"] = false;
