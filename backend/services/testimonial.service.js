const testimonialModel = require("../models/testimonial.model");
const AppError = require("../utils/AppError");
const parseBoolean = require("../utils/parseBoolean");
const storageService = require("./storage.service");
const { getPagination, buildMeta } = require("../utils/pagination");

const SUBFOLDER = "testimonials";

function serialize(row) {
  if (!row) return row;
  return { ...row, avatar_url: storageService.getUrl(SUBFOLDER, row.avatar_path) };
}

function buildFilters(query) {
  const clauses = [];
  const params = [];

  if (query.status) {
    clauses.push("status = ?");
    params.push(query.status);
  }
  if (query.featured === "true") {
    clauses.push("is_featured = 1");
  }

  return { where: clauses.length ? clauses.join(" AND ") : "1=1", params };
}

async function list(query) {
  const { page, limit, offset } = getPagination(query);
  const { where, params } = buildFilters(query);

  const [items, total] = await Promise.all([
    testimonialModel.findAll({ where, params, limit, offset, orderBy: "display_order ASC, created_at DESC" }),
    testimonialModel.count({ where, params }),
  ]);

  return { items: items.map(serialize), meta: buildMeta({ page, limit, total }) };
}

async function getById(id) {
  const row = await testimonialModel.findById(id);
  if (!row) throw AppError.notFound("Testimonial not found.");
  return serialize(row);
}

async function create(payload, file, createdBy) {
  const insertId = await testimonialModel.create({
    author_name: payload.authorName,
    author_role: payload.authorRole || null,
    organization: payload.organization || null,
    quote: payload.quote,
    avatar_path: file ? file.filename : null,
    rating: payload.rating || null,
    status: payload.status || "draft",
    is_featured: parseBoolean(payload.isFeatured) ? 1 : 0,
    display_order: payload.displayOrder || 0,
    created_by: createdBy,
  });

  return getById(insertId);
}

async function update(id, payload, file) {
  const existing = await testimonialModel.findById(id);
  if (!existing) throw AppError.notFound("Testimonial not found.");

  const data = {};
  if (payload.authorName !== undefined) data.author_name = payload.authorName;
  if (payload.authorRole !== undefined) data.author_role = payload.authorRole;
  if (payload.organization !== undefined) data.organization = payload.organization;
  if (payload.quote !== undefined) data.quote = payload.quote;
  if (payload.rating !== undefined) data.rating = payload.rating;
  if (payload.status !== undefined) data.status = payload.status;
  if (payload.isFeatured !== undefined) data.is_featured = parseBoolean(payload.isFeatured) ? 1 : 0;
  if (payload.displayOrder !== undefined) data.display_order = payload.displayOrder;
  if (file) data.avatar_path = file.filename;

  if (Object.keys(data).length > 0) {
    await testimonialModel.update(id, data);
  }

  if (file && existing.avatar_path) {
    storageService.deleteFile(SUBFOLDER, existing.avatar_path);
  }

  return getById(id);
}

async function remove(id) {
  const existing = await testimonialModel.findById(id);
  if (!existing) throw AppError.notFound("Testimonial not found.");
  await testimonialModel.remove(id);
  if (existing.avatar_path) {
    storageService.deleteFile(SUBFOLDER, existing.avatar_path);
  }
}

module.exports = { list, getById, create, update, remove };
