const bcrypt = require('bcrypt')
const crypto = require('crypto')

const encrypt = async (hash) => {
  const rounds = Number(process.env.BC_SALT)
  const salt = await bcrypt.genSalt(rounds)
  return await bcrypt.hash(hash, salt)
}

const confirmToken = async() => {
  return crypto.randomBytes(32).toString('hex')
}

module.exports = {
  encrypt,
  confirmToken,
}