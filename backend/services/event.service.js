const eventModel = require("../models/event.model");
const AppError = require("../utils/AppError");
const generateUniqueSlug = require("../utils/generateUniqueSlug");
const parseBoolean = require("../utils/parseBoolean");
const parseJsonField = require("../utils/parseJsonField");
const storageService = require("./storage.service");
const { getPagination, buildMeta } = require("../utils/pagination");

const SUBFOLDER = "events";

async function serialize(row) {
  if (!row) return row;
  const speakers = await eventModel.getSpeakers(row.id);
  return { ...row, speakers, banner_url: storageService.getUrl(SUBFOLDER, row.banner_path) };
}

function buildFilters(query) {
  const clauses = [];
  const params = [];

  if (query.status) {
    clauses.push("status = ?");
    params.push(query.status);
  }
  if (query.type) {
    clauses.push("type = ?");
    params.push(query.type);
  }
  if (query.featured === "true") {
    clauses.push("is_featured = 1");
  }
  if (query.search) {
    clauses.push("(title LIKE ? OR venue LIKE ?)");
    const like = `%${query.search}%`;
    params.push(like, like);
  }

  return { where: clauses.length ? clauses.join(" AND ") : "1=1", params };
}

async function list(query) {
  const { page, limit, offset } = getPagination(query);
  const { where, params } = buildFilters(query);

  const [rows, total] = await Promise.all([
    eventModel.findAll({ where, params, limit, offset, orderBy: "start_date DESC, id DESC" }),
    eventModel.count({ where, params }),
  ]);

  const items = await Promise.all(rows.map(serialize));
  return { items, meta: buildMeta({ page, limit, total }) };
}

async function getById(id) {
  const row = await eventModel.findById(id);
  if (!row) throw AppError.notFound("Event not found.");
  return serialize(row);
}

async function getBySlug(slug) {
  const row = await eventModel.findBySlug(slug);
  if (!row) throw AppError.notFound("Event not found.");
  return serialize(row);
}

async function create(payload, file, createdBy) {
  const slug = await generateUniqueSlug(payload.title, async (candidate) => {
    const existing = await eventModel.findBySlug(candidate);
    return Boolean(existing);
  });

  const insertId = await eventModel.create({
    title: payload.title,
    slug,
    type: payload.type,
    status: payload.status || "Upcoming",
    event_date_label: payload.eventDateLabel,
    start_date: payload.startDate || null,
    venue: payload.venue || null,
    description: payload.description || null,
    long_description: payload.longDescription || null,
    banner_path: file ? file.filename : null,
    is_featured: parseBoolean(payload.isFeatured) ? 1 : 0,
    created_by: createdBy,
  });

  const speakers = parseJsonField(payload.speakers);
  if (Array.isArray(speakers)) {
    await eventModel.setSpeakers(insertId, speakers);
  }

  return getById(insertId);
}

async function update(id, payload, file) {
  const existing = await eventModel.findById(id);
  if (!existing) throw AppError.notFound("Event not found.");

  const data = {};
  if (payload.title !== undefined) {
    data.title = payload.title;
    data.slug = await generateUniqueSlug(payload.title, async (candidate) => {
      const found = await eventModel.findBySlug(candidate);
      return Boolean(found) && found.id !== Number(id);
    });
  }
  if (payload.type !== undefined) data.type = payload.type;
  if (payload.status !== undefined) data.status = payload.status;
  if (payload.eventDateLabel !== undefined) data.event_date_label = payload.eventDateLabel;
  if (payload.startDate !== undefined) data.start_date = payload.startDate;
  if (payload.venue !== undefined) data.venue = payload.venue;
  if (payload.description !== undefined) data.description = payload.description;
  if (payload.longDescription !== undefined) data.long_description = payload.longDescription;
  if (payload.isFeatured !== undefined) data.is_featured = parseBoolean(payload.isFeatured) ? 1 : 0;
  if (file) data.banner_path = file.filename;

  if (Object.keys(data).length > 0) {
    await eventModel.update(id, data);
  }

  const speakers = parseJsonField(payload.speakers);
  if (Array.isArray(speakers)) {
    await eventModel.setSpeakers(id, speakers);
  }

  if (file && existing.banner_path) {
    storageService.deleteFile(SUBFOLDER, existing.banner_path);
  }

  return getById(id);
}

async function remove(id) {
  const existing = await eventModel.findById(id);
  if (!existing) throw AppError.notFound("Event not found.");
  await eventModel.remove(id);
  if (existing.banner_path) {
    storageService.deleteFile(SUBFOLDER, existing.banner_path);
  }
}

module.exports = { list, getById, getBySlug, create, update, remove };
