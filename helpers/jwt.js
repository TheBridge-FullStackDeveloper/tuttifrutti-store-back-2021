const jwt = require("jsonwebtoken");

const toJWT = (email, username) => {
  return jwt.sign({ email, username }, process.env.JWT_SECRET);
};

module.exports = { toJWT };
