const { getByKeyword } = require("../../query/products");

const getProductsByKeyword = (db) => async (req, res, next) => {
  const { keyword } = req.query;

  const products = await getByKeyword(db, { keyword });

  if (products === false) {
    return next({ error: new Error("Something went wrong.") });
  }

  res.status(200).json({
    success: true,
    data: { products },
  });
};

module.exports = getProductsByKeyword;
