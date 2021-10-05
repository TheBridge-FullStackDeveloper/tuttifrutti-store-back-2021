const { encrypt, compare, createConfirmToken } = require("./hash");

const serialize = (res, { email, username, active }) => {
  const accessToken = toJWT(email, username, active);
  create(res, accessToken);
};

module.exports = {
  serialize,
  hash: { encrypt, compare, createConfirmToken },
};
