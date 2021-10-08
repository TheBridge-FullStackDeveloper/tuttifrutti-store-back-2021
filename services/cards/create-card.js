const { createCard } = require("../../query/cards");
const { hash } = require("../../helpers");

const newCard = (db) => async (req, res, next) => {
  const { provider, card_number, expiration_date, owner_name } = req.body;
  const { email, username } = res.locals.user;

  if (!provider || !card_number || !expiration_date || !owner_name) {
    return next({ error: new Error("Given data failed") });
  }

  const cardNumber = await hash.encrypt(card_number);

  const result = await createCard(db, {
    provider,
    cardNumber,
    expirationDate: expiration_date,
    ownerName: owner_name,
    email,
    username,
  });

  if (!result) {
    return next({ error: new Error("Something went wrong") });
  }

  res.status(200).json({
    success: true,
  });
};

module.exports = newCard;
