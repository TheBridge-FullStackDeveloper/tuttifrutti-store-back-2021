const bcrypt = require('bcrypt');
const crypto = require('crypto');

const encrypt = async (password) => {
  const rounds = Number(process.env.SALT);
  const salt = await bcrypt.genSalt(rounds);
  return await bcrypt.hash(password, salt);
};

const compare = (password) => async (hash) => {
  return await bcrypt.compare(password, hash);
};

const createConfirmToken = async () => {
  return crypto.randomBytes(32).toString('hex');
};

module.exports = {
  encrypt,
  compare,
  createConfirmToken,
};
