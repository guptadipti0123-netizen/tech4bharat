const jwt = require("jsonwebtoken");
const config = require("../config/env");

/** Access tokens embed the role + permission snapshot so requests never need a DB round trip to authorize. */
function signAccessToken(user) {
  return jwt.sign(
    {
      sub: user.id,
      name: user.name,
      email: user.email,
      roleId: user.roleId,
      roleSlug: user.roleSlug,
      permissions: user.permissions,
    },
    config.jwt.accessSecret,
    { expiresIn: config.jwt.accessExpiresIn }
  );
}

function signRefreshToken(user) {
  return jwt.sign({ sub: user.id, tokenType: "refresh" }, config.jwt.refreshSecret, {
    expiresIn: config.jwt.refreshExpiresIn,
  });
}

function verifyAccessToken(token) {
  return jwt.verify(token, config.jwt.accessSecret);
}

function verifyRefreshToken(token) {
  return jwt.verify(token, config.jwt.refreshSecret);
}

module.exports = { signAccessToken, signRefreshToken, verifyAccessToken, verifyRefreshToken };
