const asyncHandler = require("../utils/asyncHandler");
const { sendSuccess, sendCreated } = require("../utils/apiResponse");
const startupService = require("../services/startup.service");

const list = asyncHandler(async (req, res) => {
  const { items, meta } = await startupService.list(req.query);
  sendSuccess(res, { message: "Startups fetched.", data: items, meta });
});

const getOne = asyncHandler(async (req, res) => {
  const startup = await startupService.getById(req.params.id);
  sendSuccess(res, { message: "Startup fetched.", data: startup });
});

const getBySlug = asyncHandler(async (req, res) => {
  const startup = await startupService.getBySlug(req.params.slug);
  sendSuccess(res, { message: "Startup fetched.", data: startup });
});

const create = asyncHandler(async (req, res) => {
  const startup = await startupService.create(req.body, req.file, req.user.id);
  sendCreated(res, "Startup created.", startup);
});

const update = asyncHandler(async (req, res) => {
  const startup = await startupService.update(req.params.id, req.body, req.file);
  sendSuccess(res, { message: "Startup updated.", data: startup });
});

const remove = asyncHandler(async (req, res) => {
  await startupService.remove(req.params.id);
  sendSuccess(res, { message: "Startup deleted." });
});

module.exports = { list, getOne, getBySlug, create, update, remove };
