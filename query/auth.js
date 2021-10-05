const { sql } = require("slonik");

const getUserByEmail = async (db, mail, comparationFn) => {
  try {
    const result = await db.one(
      sql`SELECT email, username, hash FROM users WHERE email LIKE ${mail}`
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

const getUserByUsername = async (db, name, comparationFn) => {
  try {
    const result = await db.one(
      sql`SELECT email, username, hash FROM users WHERE username LIKE ${name}`
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
    console.info("error at getUserByUsername query:", error.message);
    return false;
  }
};

module.exports = { getUserByEmail, getUserByUsername };
