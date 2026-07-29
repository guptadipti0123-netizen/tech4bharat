const bcrypt = require("bcrypt");
const config = require("../config/env");
const AppError = require("../utils/AppError");
const userModel = require("../models/user.model");
const { signAccessToken, signRefreshToken, verifyRefreshToken } = require("./token.service");

function toSafeUser(userRow) {
  return {
    id: userRow.id,
    name: userRow.name,
    email: userRow.email,
    roleId: userRow.role_id,
    roleName: userRow.role_name,
    roleSlug: userRow.role_slug,
    permissions:
      typeof userRow.permissions === "string" ? JSON.parse(userRow.permissions) : userRow.permissions,
    avatarPath: userRow.avatar_path,
    isActive: !!userRow.is_active,
    lastLoginAt: userRow.last_login_at,
  };
}

async function login(email, password) {
  const userRow = await userModel.findByEmailWithRole(email);
  if (!userRow) {
    throw AppError.unauthorized("Invalid email or password.");
  }
  if (!userRow.is_active) {
    throw AppError.forbidden("This account has been deactivated. Contact a Super Admin.");
  }

  const passwordMatches = await bcrypt.compare(password, userRow.password_hash);
  if (!passwordMatches) {
    throw AppError.unauthorized("Invalid email or password.");
  }

  const safeUser = toSafeUser(userRow);
  const accessToken = signAccessToken(safeUser);
  const refreshToken = signRefreshToken(safeUser);

  await userModel.touchLastLogin(userRow.id);

  return { user: safeUser, accessToken, refreshToken };
}

async function refreshAccessToken(refreshToken) {
  if (!refreshToken) {
    throw AppError.unauthorized("Refresh token missing.");
  }

  let payload;
  try {
    payload = verifyRefreshToken(refreshToken);
  } catch (error) {
    throw AppError.unauthorized("Invalid or expired refresh token.");
  }

  const userRow = await userModel.findByIdWithRole(payload.sub);
  if (!userRow || !userRow.is_active) {
    throw AppError.unauthorized("Account no longer active.");
  }

  const safeUser = toSafeUser(userRow);
  const accessToken = signAccessToken(safeUser);
  return { user: safeUser, accessToken };
}

async function hashPassword(plainPassword) {
  return bcrypt.hash(plainPassword, config.bcryptSaltRounds);
}

module.exports = { login, refreshAccessToken, hashPassword, toSafeUser };
