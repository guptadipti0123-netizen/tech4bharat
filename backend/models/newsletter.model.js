const createBaseModel = require("./baseModel");
const base = createBaseModel("newsletter_subscribers");

module.exports = {
  ...base,
  async findByEmail(email) {
    return base.findOne("email = ?", [email]);
  },
};
