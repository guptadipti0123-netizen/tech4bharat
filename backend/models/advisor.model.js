const createBaseModel = require("./baseModel");
const base = createBaseModel("advisors");

module.exports = {
  ...base,
  async findBySlug(slug) {
    return base.findOne("slug = ?", [slug]);
  },
};
