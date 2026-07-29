const partnerModel = require("../models/partner.model");
const AppError = require("../utils/AppError");
const storageService = require("./storage.service");
const { getPagination, buildMeta } = require("../utils/pagination");

const SUBFOLDER = "partners";

function serialize(row) {
  if (!row) return row;
  return { ...row, logo_url: storageService.getUrl(SUBFOLDER, row.logo_path) };
}

function buildFilters(query) {
  const clauses = [];
  const params = [];

  if (query.status) {
    clauses.push("p.status = ?");
    params.push(query.status);
  }
  if (query.category) {
    clauses.push("c.slug = ?");
    params.push(query.category);
  }
  if (query.search) {
    clauses.push("p.name LIKE ?");
    params.push(`%${query.search}%`);
  }

  return { where: clauses.length ? clauses.join(" AND ") : "1=1", params };
}

async function list(query) {
  const { page, limit, offset } = getPagination(query);
  const { where, params } = buildFilters(query);

  const [items, total] = await Promise.all([
    partnerModel.list({ where, params, limit, offset }),
    partnerModel.count({ where, params }),
  ]);

  return { items: items.map(serialize), meta: buildMeta({ page, limit, total }) };
}

async function getById(id) {
  const row = await partnerModel.findById(id);
  if (!row) throw AppError.notFound("Partner not found.");
  return serialize(row);
}

async function create(payload, file, createdBy) {
  const insertId = await partnerModel.create({
    name: payload.name,
    category_id: payload.categoryId || null,
    logo_path: file ? file.filename : null,
    website: payload.website || null,
    description: payload.description || null,
    status: payload.status || "draft",
    created_by: createdBy,
  });

  return getById(insertId);
}

async function update(id, payload, file) {
  const existing = await partnerModel.findById(id);
  if (!existing) throw AppError.notFound("Partner not found.");

  const data = {};
  if (payload.name !== undefined) data.name = payload.name;
  if (payload.categoryId !== undefined) data.category_id = payload.categoryId || null;
  if (payload.website !== undefined) data.website = payload.website;
  if (payload.description !== undefined) data.description = payload.description;
  if (payload.status !== undefined) data.status = payload.status;
  if (file) data.logo_path = file.filename;

  if (Object.keys(data).length > 0) {
    await partnerModel.update(id, data);
  }

  if (file && existing.logo_path) {
    storageService.deleteFile(SUBFOLDER, existing.logo_path);
  }

  return getById(id);
}

async function remove(id) {
  const existing = await partnerModel.findById(id);
  if (!existing) throw AppError.notFound("Partner not found.");
  await partnerModel.remove(id);
  if (existing.logo_path) {
    storageService.deleteFile(SUBFOLDER, existing.logo_path);
  }
}

module.exports = { list, getById, create, update, remove };
