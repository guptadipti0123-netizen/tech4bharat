const createBaseModel = require("./baseModel");
const base = createBaseModel("categories");

module.exports = {
  ...base,
  async findByType(type) {
    return base.findAll({ where: "type = ?", params: [type], orderBy: "name ASC" });
  },
  async findBySlugAndType(slug, type) {
    return base.findOne("slug = ? AND type = ?", [slug, type]);
  },
};
