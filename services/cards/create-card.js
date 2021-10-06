const { createCard } = require("../../query/cards");

const newCard = (db) => async (res, req, next) => {
  const { provider, card_number, expiration_date, owner_name } = req.body;

  if (!provider || !card_number || !expiration_date || !owner_name) {
    return next({ error: new Error("Given data failed") });
  }

  const result = await createCard({
    provider,
    card_number,
    expiration_date,
    owner_name,
  });

  if (!result) {
    return next({ error: new Error("Something went wrong") });
  }

  res.status(200).json({
    success: true,
  });
};

module.exports = newCard;
