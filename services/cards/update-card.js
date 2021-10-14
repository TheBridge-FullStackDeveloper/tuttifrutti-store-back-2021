const { hash } = require("../../helpers");
const { updateCard } = require("../../query/cards")

module.exports = db => async (req, res, next) => {
  const { provider, card_number, expiration_date, owner_name, id } = req.body;

  const cardNumber = await hash.encrypt(card_number);

  const result = await updateCard(db, {
    provider,
    card_number: cardNumber,
    expiration_date,
    owner_name,
    id
  });


  if (!result) {
    return next({ error: new Error("Something went wrong") });
  }

  res.status(200).json({
    success: true
  })
}