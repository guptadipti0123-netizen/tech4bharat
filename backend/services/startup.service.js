const startupModel = require("../models/startup.model");
const AppError = require("../utils/AppError");
const generateUniqueSlug = require("../utils/generateUniqueSlug");
const parseBoolean = require("../utils/parseBoolean");
const storageService = require("./storage.service");
const { getPagination, buildMeta } = require("../utils/pagination");

const SUBFOLDER = "startups";

function serialize(row) {
  if (!row) return row;
  return { ...row, logo_url: storageService.getUrl(SUBFOLDER, row.logo_path) };
}

function buildFilters(query) {
  const clauses = [];
  const params = [];

  if (query.status) {
    clauses.push("s.status = ?");
    params.push(query.status);
  }
  if (query.category) {
    clauses.push("c.slug = ?");
    params.push(query.category);
  }
  if (query.stage) {
    clauses.push("s.stage = ?");
    params.push(query.stage);
  }
  if (query.featured === "true") {
    clauses.push("s.is_featured = 1");
  }
  if (query.search) {
    clauses.push("(s.name LIKE ? OR s.founder_name LIKE ? OR s.tagline LIKE ?)");
    const like = `%${query.search}%`;
    params.push(like, like, like);
  }

  return { where: clauses.length ? clauses.join(" AND ") : "1=1", params };
}

async function list(query) {
  const { page, limit, offset } = getPagination(query);
  const { where, params } = buildFilters(query);

  const [items, total] = await Promise.all([
    startupModel.list({ where, params, limit, offset }),
    startupModel.count({ where, params }),
  ]);

  return { items: items.map(serialize), meta: buildMeta({ page, limit, total }) };
}

async function getById(id) {
  const row = await startupModel.findById(id);
  if (!row) throw AppError.notFound("Startup not found.");
  return serialize(row);
}

async function getBySlug(slug) {
  const row = await startupModel.findBySlug(slug);
  if (!row) throw AppError.notFound("Startup not found.");
  return serialize(row);
}

async function create(payload, file, createdBy) {
  const slug = await generateUniqueSlug(payload.name, async (candidate) => {
    const existing = await startupModel.findBySlug(candidate);
    return Boolean(existing);
  });

  const insertId = await startupModel.create({
    name: payload.name,
    slug,
    founder_name: payload.founderName,
    category_id: payload.categoryId || null,
    stage: payload.stage,
    tagline: payload.tagline || null,
    description: payload.description || null,
    logo_path: file ? file.filename : null,
    website: payload.website || null,
    founded_year: payload.foundedYear || null,
    location: payload.location || null,
    status: payload.status || "draft",
    is_featured: parseBoolean(payload.isFeatured) ? 1 : 0,
    created_by: createdBy,
  });

  return getById(insertId);
}

async function update(id, payload, file) {
  const existing = await startupModel.findById(id);
  if (!existing) throw AppError.notFound("Startup not found.");

  const data = {};
  if (payload.name !== undefined) {
    data.name = payload.name;
    data.slug = await generateUniqueSlug(payload.name, async (candidate) => {
      const found = await startupModel.findBySlug(candidate);
      return Boolean(found) && found.id !== Number(id);
    });
  }
  if (payload.founderName !== undefined) data.founder_name = payload.founderName;
  if (payload.categoryId !== undefined) data.category_id = payload.categoryId || null;
  if (payload.stage !== undefined) data.stage = payload.stage;
  if (payload.tagline !== undefined) data.tagline = payload.tagline;
  if (payload.description !== undefined) data.description = payload.description;
  if (payload.website !== undefined) data.website = payload.website;
  if (payload.foundedYear !== undefined) data.founded_year = payload.foundedYear;
  if (payload.location !== undefined) data.location = payload.location;
  if (payload.status !== undefined) data.status = payload.status;
  if (payload.isFeatured !== undefined) data.is_featured = parseBoolean(payload.isFeatured) ? 1 : 0;
  if (file) data.logo_path = file.filename;

  if (Object.keys(data).length > 0) {
    await startupModel.update(id, data);
  }

  if (file && existing.logo_path) {
    storageService.deleteFile(SUBFOLDER, existing.logo_path);
  }

  return getById(id);
}

async function remove(id) {
  const existing = await startupModel.findById(id);
  if (!existing) throw AppError.notFound("Startup not found.");
  await startupModel.remove(id);
  if (existing.logo_path) {
    storageService.deleteFile(SUBFOLDER, existing.logo_path);
  }
}

module.exports = { list, getById, getBySlug, create, update, remove };
