const { sql } = require("slonik");

const createCard = async (db, data) => {
  try {
    const { rows } = await db.query(sql`
        INSERT INTO cards (provider, card_number, expiration_date, owner_name)
        VALUES (data.provider, data.card_number, data.expiration_date, data.owner_name)`);
    return rows;
  } catch (error) {
    console.info("> error at 'createCard' query: ", error.message);
    return false;
  }
};

module.exports = { createCard };
