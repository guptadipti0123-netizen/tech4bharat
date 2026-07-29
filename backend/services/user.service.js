const AppError = require("../utils/AppError");
const userModel = require("../models/user.model");
const roleModel = require("../models/role.model");
const parseBoolean = require("../utils/parseBoolean");
const { hashPassword, toSafeUser } = require("./auth.service");
const { getPagination, buildMeta } = require("../utils/pagination");

async function list(query) {
  const { page, limit, offset } = getPagination(query);
  const [items, total] = await Promise.all([userModel.listWithRole({ limit, offset }), userModel.count()]);
  return { items: items.map(toSafeUser), meta: buildMeta({ page, limit, total }) };
}

async function getById(id) {
  const userRow = await userModel.findByIdWithRole(id);
  if (!userRow) throw AppError.notFound("User not found.");
  return toSafeUser(userRow);
}

async function create({ name, email, password, roleId }, createdBy) {
  const existing = await userModel.findByEmailWithRole(email);
  if (existing) throw AppError.conflict("A user with this email already exists.");

  const role = await roleModel.findById(roleId);
  if (!role) throw AppError.badRequest("Invalid role.");

  const passwordHash = await hashPassword(password);
  const insertId = await userModel.create({
    name,
    email,
    password_hash: passwordHash,
    role_id: roleId,
    created_by: createdBy,
  });

  return getById(insertId);
}

async function update(id, { name, email, roleId, isActive }, actingUser) {
  const target = await userModel.findByIdWithRole(id);
  if (!target) throw AppError.notFound("User not found.");

  if (target.role_slug === "super-admin" && actingUser.roleSlug !== "super-admin") {
    throw AppError.forbidden("Only a Super Admin can modify another Super Admin.");
  }

  const data = {};
  if (name !== undefined) data.name = name;
  if (email !== undefined) data.email = email;
  if (roleId !== undefined) data.role_id = roleId;
  if (isActive !== undefined) data.is_active = parseBoolean(isActive) ? 1 : 0;

  if (Object.keys(data).length > 0) {
    await userModel.update(id, data);
  }
  return getById(id);
}

async function resetPassword(id, newPassword) {
  const passwordHash = await hashPassword(newPassword);
  await userModel.update(id, { password_hash: passwordHash });
}

async function remove(id, actingUser) {
  const target = await userModel.findByIdWithRole(id);
  if (!target) throw AppError.notFound("User not found.");
  if (Number(target.id) === Number(actingUser.id)) {
    throw AppError.badRequest("You cannot delete your own account.");
  }
  if (target.role_slug === "super-admin") {
    throw AppError.forbidden("Super Admin accounts cannot be deleted.");
  }
  await userModel.remove(id);
}

module.exports = { list, getById, create, update, resetPassword, remove };
