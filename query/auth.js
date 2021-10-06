const { sql } = require("slonik");

const getUserByEmailOrUsername = async (
  db,
  mail = " ",
  username = " ",
  comparationFn
) => {
  try {
    const result = await db.one(
      sql`SELECT email, username, hash FROM users WHERE email LIKE ${mail} OR username LIKE ${username}`
    );

    if (!result) {
      throw new Error("invalid credentials");
    }

    const isValidPassword = await comparationFn(result.hash);

    if (!isValidPassword) {
      throw new Error("invalid credentials");
    }

    return result;
  } catch (error) {
    console.info("error at getUserByEmail query:", error.message);
    return false;
  }
};

module.exports = { getUserByEmailOrUsername };
