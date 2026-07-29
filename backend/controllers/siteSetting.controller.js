const asyncHandler = require("../utils/asyncHandler");
const { sendSuccess } = require("../utils/apiResponse");
const siteSettingService = require("../services/siteSetting.service");

const list = asyncHandler(async (req, res) => {
  const settings = await siteSettingService.list();
  sendSuccess(res, { message: "Homepage content fetched.", data: settings });
});

const getOne = asyncHandler(async (req, res) => {
  const setting = await siteSettingService.getByKey(req.params.sectionKey);
  sendSuccess(res, { message: "Homepage content fetched.", data: setting });
});

const upsert = asyncHandler(async (req, res) => {
  const setting = await siteSettingService.upsert(req.params.sectionKey, req.body.content, req.user.id);
  sendSuccess(res, { message: "Homepage content updated.", data: setting });
});

module.exports = { list, getOne, upsert };
