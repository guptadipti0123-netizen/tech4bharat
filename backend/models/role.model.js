const createBaseModel = require("./baseModel");
const base = createBaseModel("roles");

module.exports = {
  ...base,
  async findBySlug(slug) {
    return base.findOne("slug = ?", [slug]);
  },
};
