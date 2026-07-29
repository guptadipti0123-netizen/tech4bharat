const asyncHandler = require("../utils/asyncHandler");
const { sendSuccess } = require("../utils/apiResponse");
const roleModel = require("../models/role.model");

const list = asyncHandler(async (req, res) => {
  const roles = await roleModel.findAll({ orderBy: "id ASC" });
  sendSuccess(res, { message: "Roles fetched.", data: roles });
});

module.exports = { list };
