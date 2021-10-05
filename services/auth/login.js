const { hash, serialize } = require("../../helpers");
const { getUserByEmail, getUserByUsername } = require("../../query/auth");

const login = (db) => async (req, res, next) => {
  const { email, username, password } = req.body;

  if ((!email || !username) && !password) {
    return next({ error: new Error("Given data failed") });
  }

  let user;
  if (email) {
    user = await getUserByEmail(db, email, hash.compare(password));
  } else {
    user = await getUserByUsername(db, username, hash.compare(password));
  }

  const token = serialize(res, {
    email: user.email,
    username: user.username,
  });

  if (!user) {
    return next({ error: new Error("Something went wrong") });
  }

  res.status(200).json({
    success: true,
    data: token,
  });
};

module.exports = login;
