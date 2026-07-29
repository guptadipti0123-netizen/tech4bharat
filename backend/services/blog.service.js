const blogModel = require("../models/blog.model");
const AppError = require("../utils/AppError");
const generateUniqueSlug = require("../utils/generateUniqueSlug");
const parseBoolean = require("../utils/parseBoolean");
const storageService = require("./storage.service");
const { getPagination, buildMeta } = require("../utils/pagination");

const SUBFOLDER = "blogs";

function serialize(row) {
  if (!row) return row;
  return { ...row, cover_image_url: storageService.getUrl(SUBFOLDER, row.cover_image_path) };
}

function buildFilters(query) {
  const clauses = [];
  const params = [];

  if (query.status) {
    clauses.push("b.status = ?");
    params.push(query.status);
  }
  if (query.category) {
    clauses.push("c.slug = ?");
    params.push(query.category);
  }
  if (query.featured === "true") {
    clauses.push("b.is_featured = 1");
  }
  if (query.search) {
    clauses.push("(b.title LIKE ? OR b.excerpt LIKE ?)");
    const like = `%${query.search}%`;
    params.push(like, like);
  }

  return { where: clauses.length ? clauses.join(" AND ") : "1=1", params };
}

async function list(query) {
  const { page, limit, offset } = getPagination(query);
  const { where, params } = buildFilters(query);

  const [items, total] = await Promise.all([
    blogModel.list({ where, params, limit, offset }),
    blogModel.count({ where, params }),
  ]);

  return { items: items.map(serialize), meta: buildMeta({ page, limit, total }) };
}

async function getById(id) {
  const row = await blogModel.findById(id);
  if (!row) throw AppError.notFound("Blog post not found.");
  return serialize(row);
}

async function getBySlug(slug) {
  const row = await blogModel.findBySlug(slug);
  if (!row) throw AppError.notFound("Blog post not found.");
  return serialize(row);
}

async function create(payload, file, authorId) {
  const slug = await generateUniqueSlug(payload.title, async (candidate) => {
    const existing = await blogModel.findBySlug(candidate);
    return Boolean(existing);
  });

  const status = payload.status || "draft";

  const insertId = await blogModel.create({
    title: payload.title,
    slug,
    excerpt: payload.excerpt || null,
    content: payload.content || null,
    category_id: payload.categoryId || null,
    author_id: authorId,
    cover_image_path: file ? file.filename : null,
    status,
    is_featured: parseBoolean(payload.isFeatured) ? 1 : 0,
    read_time_minutes: payload.readTimeMinutes || null,
    published_at: status === "published" ? new Date() : null,
  });

  return getById(insertId);
}

async function update(id, payload, file) {
  const existing = await blogModel.findById(id);
  if (!existing) throw AppError.notFound("Blog post not found.");

  const data = {};
  if (payload.title !== undefined) {
    data.title = payload.title;
    data.slug = await generateUniqueSlug(payload.title, async (candidate) => {
      const found = await blogModel.findBySlug(candidate);
      return Boolean(found) && found.id !== Number(id);
    });
  }
  if (payload.excerpt !== undefined) data.excerpt = payload.excerpt;
  if (payload.content !== undefined) data.content = payload.content;
  if (payload.categoryId !== undefined) data.category_id = payload.categoryId || null;
  if (payload.readTimeMinutes !== undefined) data.read_time_minutes = payload.readTimeMinutes;
  if (payload.isFeatured !== undefined) data.is_featured = parseBoolean(payload.isFeatured) ? 1 : 0;
  if (payload.status !== undefined) {
    data.status = payload.status;
    if (payload.status === "published" && existing.status !== "published") {
      data.published_at = new Date();
    }
  }
  if (file) data.cover_image_path = file.filename;

  if (Object.keys(data).length > 0) {
    await blogModel.update(id, data);
  }

  if (file && existing.cover_image_path) {
    storageService.deleteFile(SUBFOLDER, existing.cover_image_path);
  }

  return getById(id);
}

async function remove(id) {
  const existing = await blogModel.findById(id);
  if (!existing) throw AppError.notFound("Blog post not found.");
  await blogModel.remove(id);
  if (existing.cover_image_path) {
    storageService.deleteFile(SUBFOLDER, existing.cover_image_path);
  }
}

module.exports = { list, getById, getBySlug, create, update, remove };
