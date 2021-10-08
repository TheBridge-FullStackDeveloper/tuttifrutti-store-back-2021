const { deserialize } = require("../helpers");

const authorization = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return next({
      statusCode: 401,
      error: new Error("unauthorized"),
    });
  }

  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer" || !token) {
    return next({
      statusCode: 401,
      error: new Error("unauthorized"),
    });
  }

  const user = deserialize(token);
  console.log("des", user);
  res.locals.user = user;
  next();
};

module.exports = { authorization };
