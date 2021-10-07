const { encrypt, compare } = require("./hash");
const { toJWT } = require("./jwt");

const serialize = (res, { email, username }) => {
  const accessToken = toJWT(email, username);
  return accessToken;
};

module.exports = {
  serialize,

  hash: { encrypt, compare },
};
