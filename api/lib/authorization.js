const jwt = require("jsonwebtoken");

exports = module.exports = () => {
  return {
    async createToken(user) {
      console.log(user)  
      return jwt.sign({user: user.userName,}, user.password, { expiresIn: 60 * 60 });
    },
    verifyToken(req, res, next) {
      return 
    }
  };
};

exports["@singleton"] = true;
exports["@async"] = false;
