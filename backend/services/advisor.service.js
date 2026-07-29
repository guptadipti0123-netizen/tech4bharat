const advisorModel = require("../models/advisor.model");
const AppError = require("../utils/AppError");
const generateUniqueSlug = require("../utils/generateUniqueSlug");
const storageService = require("./storage.service");
const { getPagination, buildMeta } = require("../utils/pagination");

const SUBFOLDER = "advisors";

function serialize(row) {
  if (!row) return row;
  return { ...row, photo_url: storageService.getUrl(SUBFOLDER, row.photo_path) };
}

function buildFilters(query) {
  const clauses = [];
  const params = [];

  if (query.status) {
    clauses.push("status = ?");
    params.push(query.status);
  }
  if (query.search) {
    clauses.push("(name LIKE ? OR organization LIKE ?)");
    const like = `%${query.search}%`;
    params.push(like, like);
  }

  return { where: clauses.length ? clauses.join(" AND ") : "1=1", params };
}

async function list(query) {
  const { page, limit, offset } = getPagination(query);
  const { where, params } = buildFilters(query);

  const [rows, total] = await Promise.all([
    advisorModel.findAll({ where, params, limit, offset }),
    advisorModel.count({ where, params }),
  ]);

  return { items: rows.map(serialize), meta: buildMeta({ page, limit, total }) };
}

async function getById(id) {
  const row = await advisorModel.findById(id);
  if (!row) throw AppError.notFound("Advisor not found.");
  return serialize(row);
}

async function getBySlug(slug) {
  const row = await advisorModel.findBySlug(slug);
  if (!row) throw AppError.notFound("Advisor not found.");
  return serialize(row);
}

async function create(payload, file, createdBy) {
  const slug = await generateUniqueSlug(payload.name, async (candidate) => {
    const existing = await advisorModel.findBySlug(candidate);
    return Boolean(existing);
  });

  const insertId = await advisorModel.create({
    name: payload.name,
    slug,
    designation: payload.designation || null,
    organization: payload.organization || null,
    bio: payload.bio || null,
    photo_path: file ? file.filename : null,
    linkedin_url: payload.linkedinUrl || null,
    status: payload.status || "draft",
    created_by: createdBy,
  });

  return getById(insertId);
}

async function update(id, payload, file) {
  const existing = await advisorModel.findById(id);
  if (!existing) throw AppError.notFound("Advisor not found.");

  const data = {};
  if (payload.name !== undefined) {
    data.name = payload.name;
    data.slug = await generateUniqueSlug(payload.name, async (candidate) => {
      const found = await advisorModel.findBySlug(candidate);
      return Boolean(found) && found.id !== Number(id);
    });
  }
  if (payload.designation !== undefined) data.designation = payload.designation;
  if (payload.organization !== undefined) data.organization = payload.organization;
  if (payload.bio !== undefined) data.bio = payload.bio;
  if (payload.linkedinUrl !== undefined) data.linkedin_url = payload.linkedinUrl;
  if (payload.status !== undefined) data.status = payload.status;
  if (file) data.photo_path = file.filename;

  if (Object.keys(data).length > 0) {
    await advisorModel.update(id, data);
  }

  if (file && existing.photo_path) {
    storageService.deleteFile(SUBFOLDER, existing.photo_path);
  }

  return getById(id);
}

async function remove(id) {
  const existing = await advisorModel.findById(id);
  if (!existing) throw AppError.notFound("Advisor not found.");
  await advisorModel.remove(id);
  if (existing.photo_path) {
    storageService.deleteFile(SUBFOLDER, existing.photo_path);
  }
}

module.exports = { list, getById, getBySlug, create, update, remove };
