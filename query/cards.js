const { sql } = require("slonik");

const updateCard = async (db, {
  provider,
  card_number,
  expiration_date,
  owner_name,
  email,
  username,
  id
}) => {
  try {
    console.log(id)
    const result = await db.query(sql`
        UPDATE cards
        SET
            provider = ${provider},
            card_number = ${card_number},
            expiration_date = ${expiration_date},
            owner_name = ${owner_name}
        WHERE
              id = ${id}
        `)
        console.log(result)
        return result.rows
  } catch (error) {
    console.info("> error at 'updateCard' query: ", error.message);
    return false;
  }
}
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

module.exports = { createCard, updateCard };
