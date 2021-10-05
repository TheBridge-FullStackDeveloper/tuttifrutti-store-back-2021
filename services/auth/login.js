const { hash, serialize } = require("../../helpers");

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

  if (!user) {
    return next({ error: new Error("Something went wrong") });
  }
};
