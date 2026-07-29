const categoryModel = require("../models/category.model");
const AppError = require("../utils/AppError");
const generateUniqueSlug = require("../utils/generateUniqueSlug");
const createCrudService = require("./baseCrud.service");

const base = createCrudService(categoryModel, { notFoundMessage: "Category not found." });

async function listByType(type) {
  return categoryModel.findByType(type);
}

async function create(payload) {
  const slug = await generateUniqueSlug(payload.name, async (candidate) => {
    const existing = await categoryModel.findBySlugAndType(candidate, payload.type);
    return Boolean(existing);
  });

  return base.create({ name: payload.name, slug, type: payload.type });
}

async function remove(id) {
  return base.remove(id);
}

module.exports = { ...base, listByType, create, remove };
