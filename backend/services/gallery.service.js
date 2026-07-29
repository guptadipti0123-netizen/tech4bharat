const galleryModel = require("../models/gallery.model");
const AppError = require("../utils/AppError");
const storageService = require("./storage.service");
const { getPagination, buildMeta } = require("../utils/pagination");

const SUBFOLDER = "gallery";

function serialize(row) {
  if (!row) return row;
  return { ...row, image_url: storageService.getUrl(SUBFOLDER, row.image_path) };
}

function buildFilters(query) {
  const clauses = [];
  const params = [];

  if (query.category) {
    clauses.push("category = ?");
    params.push(query.category);
  }
  if (query.eventId) {
    clauses.push("event_id = ?");
    params.push(query.eventId);
  }

  return { where: clauses.length ? clauses.join(" AND ") : "1=1", params };
}

async function list(query) {
  const { page, limit, offset } = getPagination(query, { defaultLimit: 24, maxLimit: 60 });
  const { where, params } = buildFilters(query);

  const [items, total] = await Promise.all([
    galleryModel.findAll({ where, params, limit, offset }),
    galleryModel.count({ where, params }),
  ]);

  return { items: items.map(serialize), meta: buildMeta({ page, limit, total }) };
}

async function getById(id) {
  const row = await galleryModel.findById(id);
  if (!row) throw AppError.notFound("Gallery image not found.");
  return serialize(row);
}

async function create(payload, file, uploadedBy) {
  if (!file) throw AppError.badRequest("An image file is required.");

  const insertId = await galleryModel.create({
    title: payload.title || null,
    image_path: file.filename,
    category: payload.category || null,
    event_id: payload.eventId || null,
    uploaded_by: uploadedBy,
  });

  return getById(insertId);
}

async function update(id, payload) {
  const existing = await galleryModel.findById(id);
  if (!existing) throw AppError.notFound("Gallery image not found.");

  const data = {};
  if (payload.title !== undefined) data.title = payload.title;
  if (payload.category !== undefined) data.category = payload.category;
  if (payload.eventId !== undefined) data.event_id = payload.eventId || null;

  if (Object.keys(data).length > 0) {
    await galleryModel.update(id, data);
  }

  return getById(id);
}

async function remove(id) {
  const existing = await galleryModel.findById(id);
  if (!existing) throw AppError.notFound("Gallery image not found.");
  await galleryModel.remove(id);
  storageService.deleteFile(SUBFOLDER, existing.image_path);
}

module.exports = { list, getById, create, update, remove };
