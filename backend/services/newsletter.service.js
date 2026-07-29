const newsletterModel = require("../models/newsletter.model");
const AppError = require("../utils/AppError");
const { getPagination, buildMeta } = require("../utils/pagination");

async function subscribe(email) {
  const existing = await newsletterModel.findByEmail(email);

  if (existing) {
    if (existing.is_active) {
      throw AppError.conflict("This email is already subscribed.");
    }
    await newsletterModel.update(existing.id, { is_active: 1, unsubscribed_at: null });
    return newsletterModel.findById(existing.id);
  }

  const insertId = await newsletterModel.create({ email });
  return newsletterModel.findById(insertId);
}

async function unsubscribe(email) {
  const existing = await newsletterModel.findByEmail(email);
  if (!existing) throw AppError.notFound("Subscriber not found.");
  await newsletterModel.update(existing.id, { is_active: 0, unsubscribed_at: new Date() });
}

async function list(query) {
  const { page, limit, offset } = getPagination(query);
  const clauses = [];
  const params = [];

  if (query.isActive === "true") clauses.push("is_active = 1");
  if (query.isActive === "false") clauses.push("is_active = 0");

  const where = clauses.length ? clauses.join(" AND ") : "1=1";

  const [items, total] = await Promise.all([
    newsletterModel.findAll({ where, params, limit, offset, orderBy: "subscribed_at DESC" }),
    newsletterModel.count({ where, params }),
  ]);

  return { items, meta: buildMeta({ page, limit, total }) };
}

async function remove(id) {
  const existing = await newsletterModel.findById(id);
  if (!existing) throw AppError.notFound("Subscriber not found.");
  await newsletterModel.remove(id);
}

/** Full, unpaginated list for CSV export. */
async function exportAll() {
  return newsletterModel.findAll({ orderBy: "subscribed_at DESC" });
}

module.exports = { subscribe, unsubscribe, list, remove, exportAll };
