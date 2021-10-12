module.exports = ({ statusCode = 500, error }, req, res, next) => {
  res.status(statusCode).json({
    sucess: false,
    message: error.message,
  });
};
