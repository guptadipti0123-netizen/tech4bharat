const successStoryModel = require("../models/successStory.model");
const AppError = require("../utils/AppError");
const generateUniqueSlug = require("../utils/generateUniqueSlug");
const parseJsonField = require("../utils/parseJsonField");
const storageService = require("./storage.service");
const { getPagination, buildMeta } = require("../utils/pagination");

const SUBFOLDER = "success-stories";

async function serialize(row) {
  if (!row) return row;
  const metrics = await successStoryModel.getMetrics(row.id);
  return {
    ...row,
    story: row.story ? row.story.split("\n\n") : [],
    impactMetrics: metrics,
    cover_image_url: storageService.getUrl(SUBFOLDER, row.cover_image_path),
  };
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
  if (query.search) {
    clauses.push("(s.headline LIKE ? OR s.startup_name LIKE ?)");
    const like = `%${query.search}%`;
    params.push(like, like);
  }

  return { where: clauses.length ? clauses.join(" AND ") : "1=1", params };
}

async function list(query) {
  const { page, limit, offset } = getPagination(query);
  const { where, params } = buildFilters(query);

  const [rows, total] = await Promise.all([
    successStoryModel.list({ where, params, limit, offset }),
    successStoryModel.count({ where, params }),
  ]);

  const items = await Promise.all(rows.map(serialize));
  return { items, meta: buildMeta({ page, limit, total }) };
}

async function getById(id) {
  const row = await successStoryModel.findById(id);
  if (!row) throw AppError.notFound("Success story not found.");
  return serialize(row);
}

async function getBySlug(slug) {
  const row = await successStoryModel.findBySlug(slug);
  if (!row) throw AppError.notFound("Success story not found.");
  return serialize(row);
}

async function create(payload, file, createdBy) {
  const slug = await generateUniqueSlug(payload.headline, async (candidate) => {
    const existing = await successStoryModel.findBySlug(candidate);
    return Boolean(existing);
  });

  const story = parseJsonField(payload.story);

  const insertId = await successStoryModel.create({
    startup_id: payload.startupId || null,
    startup_name: payload.startupName,
    founder_name: payload.founderName,
    domain_category_id: payload.categoryId || null,
    headline: payload.headline,
    slug,
    excerpt: payload.excerpt || null,
    story: Array.isArray(story) ? story.join("\n\n") : payload.story || null,
    cover_image_path: file ? file.filename : null,
    status: payload.status || "draft",
    created_by: createdBy,
  });

  const metrics = parseJsonField(payload.impactMetrics);
  if (Array.isArray(metrics)) {
    await successStoryModel.setMetrics(insertId, metrics);
  }

  return getById(insertId);
}

async function update(id, payload, file) {
  const existing = await successStoryModel.findById(id);
  if (!existing) throw AppError.notFound("Success story not found.");

  const data = {};
  if (payload.headline !== undefined) {
    data.headline = payload.headline;
    data.slug = await generateUniqueSlug(payload.headline, async (candidate) => {
      const found = await successStoryModel.findBySlug(candidate);
      return Boolean(found) && found.id !== Number(id);
    });
  }
  if (payload.startupId !== undefined) data.startup_id = payload.startupId || null;
  if (payload.startupName !== undefined) data.startup_name = payload.startupName;
  if (payload.founderName !== undefined) data.founder_name = payload.founderName;
  if (payload.categoryId !== undefined) data.domain_category_id = payload.categoryId || null;
  if (payload.excerpt !== undefined) data.excerpt = payload.excerpt;
  if (payload.status !== undefined) data.status = payload.status;
  if (payload.story !== undefined) {
    const story = parseJsonField(payload.story);
    data.story = Array.isArray(story) ? story.join("\n\n") : payload.story;
  }
  if (file) data.cover_image_path = file.filename;

  if (Object.keys(data).length > 0) {
    await successStoryModel.update(id, data);
  }

  const metrics = parseJsonField(payload.impactMetrics);
  if (Array.isArray(metrics)) {
    await successStoryModel.setMetrics(id, metrics);
  }

  if (file && existing.cover_image_path) {
    storageService.deleteFile(SUBFOLDER, existing.cover_image_path);
  }

  return getById(id);
}

async function remove(id) {
  const existing = await successStoryModel.findById(id);
  if (!existing) throw AppError.notFound("Success story not found.");
  await successStoryModel.remove(id);
  if (existing.cover_image_path) {
    storageService.deleteFile(SUBFOLDER, existing.cover_image_path);
  }
}

module.exports = { list, getById, getBySlug, create, update, remove };
