const { sql } = require("slonik");

const createCard = async (db, data) => {
  try {
    const { rows } = await db.query(sql`
      INSERT INTO cards (user_id, provider, card_number, expiration_date, owner_name) VALUES
      ((SELECT id FROM users WHERE  username = ${data.username} AND email = ${data.email}),
      ${data.provider}, ${data.cardNumber}, ${data.expirationDate}, ${data.ownerName} );
    `);
    return rows;
  } catch (error) {
    console.info("> error at 'createCard' query: ", error.message);
    return false;
  }
};

module.exports = { createCard };
