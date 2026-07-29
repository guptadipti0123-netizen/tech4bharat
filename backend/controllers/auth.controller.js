const asyncHandler = require("../utils/asyncHandler");
const { sendSuccess } = require("../utils/apiResponse");
const authService = require("../services/auth.service");
const config = require("../config/env");

const REFRESH_COOKIE_OPTIONS = {
  httpOnly: true,
  secure: config.env === "production",
  sameSite: "lax",
  path: `${config.apiPrefix}/auth`,
};

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const { user, accessToken, refreshToken } = await authService.login(email, password);

  res.cookie(config.jwt.refreshCookieName, refreshToken, REFRESH_COOKIE_OPTIONS);
  sendSuccess(res, { message: "Login successful.", data: { user, accessToken } });
});

const refresh = asyncHandler(async (req, res) => {
  const refreshToken = req.cookies?.[config.jwt.refreshCookieName];
  const { user, accessToken } = await authService.refreshAccessToken(refreshToken);
  sendSuccess(res, { message: "Token refreshed.", data: { user, accessToken } });
});

const logout = asyncHandler(async (req, res) => {
  res.clearCookie(config.jwt.refreshCookieName, REFRESH_COOKIE_OPTIONS);
  sendSuccess(res, { message: "Logged out successfully." });
});

const me = asyncHandler(async (req, res) => {
  sendSuccess(res, { message: "Current user.", data: req.user });
});

module.exports = { login, refresh, logout, me };
