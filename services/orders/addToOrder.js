const { addToCart } = require('../../query/products');

module.exports = (db) => async (req, res, next) => {
  const result = await addToCart(db, { productRef, orderId });

  const { productRef } = req.body.productRef;
  const { orderId } = req.body.orderId;

  if (!result) {
    return next({
      statuscode: 400,
      error: new Error('Something went wrong'),
    });
  }

  res.status(200).json({
    productRef: productRef,
    orderId: orderId,
  });
};
