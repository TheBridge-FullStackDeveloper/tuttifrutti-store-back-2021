const jwt = require("jsonwebtoken");

require("dotenv").config();
const toJWT = (email, username) => {
  return jwt.sign({ email, username }, process.env.JWT_SECRET);
};

const fromJWT = (accessToken) => {
  try {
    return jwt.verify(accessToken, process.env.JWT_SECRET);
  } catch (error) {
    console.info('> error at "fromJWT" helper: ', error);
    return false;
  }
};

const token = toJWT("maidersonn@gmail.com", "maider");
console.log(token);
