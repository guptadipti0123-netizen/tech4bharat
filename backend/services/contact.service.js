const contactMessageModel = require("../models/contactMessage.model");
const AppError = require("../utils/AppError");
const { getPagination, buildMeta } = require("../utils/pagination");

async function submit(payload) {
  const insertId = await contactMessageModel.create({
    name: payload.name,
    email: payload.email,
    subject: payload.subject || null,
    message: payload.message,
  });
  return contactMessageModel.findById(insertId);
}

async function list(query) {
  const { page, limit, offset } = getPagination(query);
  const clauses = [];
  const params = [];

  if (query.isRead === "true") clauses.push("is_read = 1");
  if (query.isRead === "false") clauses.push("is_read = 0");

  const where = clauses.length ? clauses.join(" AND ") : "1=1";

  const [items, total] = await Promise.all([
    contactMessageModel.findAll({ where, params, limit, offset }),
    contactMessageModel.count({ where, params }),
  ]);

  return { items, meta: buildMeta({ page, limit, total }) };
}

async function getById(id) {
  const row = await contactMessageModel.findById(id);
  if (!row) throw AppError.notFound("Message not found.");
  return row;
}

async function markRead(id, isRead = true) {
  await getById(id);
  await contactMessageModel.update(id, { is_read: isRead ? 1 : 0 });
  return getById(id);
}

async function remove(id) {
  await getById(id);
  await contactMessageModel.remove(id);
}

module.exports = { submit, list, getById, markRead, remove };
