const asyncHandler = require("../utils/asyncHandler");
const { sendSuccess, sendCreated } = require("../utils/apiResponse");
const partnerService = require("../services/partner.service");

const list = asyncHandler(async (req, res) => {
  const { items, meta } = await partnerService.list(req.query);
  sendSuccess(res, { message: "Partners fetched.", data: items, meta });
});

const getOne = asyncHandler(async (req, res) => {
  const partner = await partnerService.getById(req.params.id);
  sendSuccess(res, { message: "Partner fetched.", data: partner });
});

const create = asyncHandler(async (req, res) => {
  const partner = await partnerService.create(req.body, req.file, req.user.id);
  sendCreated(res, "Partner created.", partner);
});

const update = asyncHandler(async (req, res) => {
  const partner = await partnerService.update(req.params.id, req.body, req.file);
  sendSuccess(res, { message: "Partner updated.", data: partner });
});

const remove = asyncHandler(async (req, res) => {
  await partnerService.remove(req.params.id);
  sendSuccess(res, { message: "Partner deleted." });
});

module.exports = { list, getOne, create, update, remove };
