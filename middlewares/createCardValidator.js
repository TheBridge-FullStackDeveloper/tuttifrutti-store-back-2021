module.exports = (req, res, next) => {
  const { provider, card_number, expiration_date, owner_name } = req.body;

  if (!provider || !card_number || !expiration_date || !owner_name) {
    return next({ error: new Error("Given data failed") });
  }
  next();
};
