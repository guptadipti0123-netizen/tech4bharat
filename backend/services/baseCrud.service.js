const AppError = require("../utils/AppError");
const { getPagination, buildMeta } = require("../utils/pagination");

/**
 * Standard list/get/create/update/remove behavior around a models/baseModel.js
 * instance. Resources with extra behavior (slugs, child tables, file cleanup)
 * compose this instead of re-implementing pagination/not-found boilerplate.
 */
function createCrudService(model, { notFoundMessage = "Resource not found" } = {}) {
  const service = {
    async list(query = {}, { where = "1=1", params = [], orderBy } = {}) {
      const { page, limit, offset } = getPagination(query);
      const [items, total] = await Promise.all([
        model.findAll({ where, params, orderBy, limit, offset }),
        model.count({ where, params }),
      ]);
      return { items, meta: buildMeta({ page, limit, total }) };
    },

    async getById(id) {
      const item = await model.findById(id);
      if (!item) throw AppError.notFound(notFoundMessage);
      return item;
    },

    async create(data) {
      const insertId = await model.create(data);
      return model.findById(insertId);
    },

    async update(id, data) {
      await service.getById(id);
      await model.update(id, data);
      return model.findById(id);
    },

    async remove(id) {
      await service.getById(id);
      return model.remove(id);
    },
  };

  return service;
}

module.exports = createCrudService;
