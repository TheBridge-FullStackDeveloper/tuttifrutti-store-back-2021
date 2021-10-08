const { hash } = require("../../helpers");

module.exports = db => async (req, res, next) => {
    const { provider, card_number, expiration_date, owner_name } = req.body;

    const result = await createCard(db, {
        provider,
        card_number,
        expiration_date,
        owner_name,
        email,
        username,
      });


    if (!result) {
        return next({ error: new Error("Something went wrong") });
      }

    res.status(200).json({
        success: true
    })
}