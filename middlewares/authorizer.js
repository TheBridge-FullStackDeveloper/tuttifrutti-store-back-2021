const { deserialize } = require("../helpers");

const authorization = (req, _, next) => {
  const { authorization } = req.headers;
  console.log("auth", authorization);

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

  const accessToken = deserialize(token);
  console.log("linea 24", accessToken);

  res.locals.accessToken = accessToken;
  console.log(res.locals);
  next();
};

module.exports = { authorization };
