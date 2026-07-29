const createBaseModel = require("./baseModel");
const base = createBaseModel("site_settings");

module.exports = {
  ...base,
  async findByKey(sectionKey) {
    return base.findOne("section_key = ?", [sectionKey]);
  },
};
