const asyncHandler = require("../utils/asyncHandler");
const { sendSuccess, sendCreated } = require("../utils/apiResponse");
const advisorService = require("../services/advisor.service");

const list = asyncHandler(async (req, res) => {
  const { items, meta } = await advisorService.list(req.query);
  sendSuccess(res, { message: "Advisors fetched.", data: items, meta });
});

const getOne = asyncHandler(async (req, res) => {
  const advisor = await advisorService.getById(req.params.id);
  sendSuccess(res, { message: "Advisor fetched.", data: advisor });
});

const getBySlug = asyncHandler(async (req, res) => {
  const advisor = await advisorService.getBySlug(req.params.slug);
  sendSuccess(res, { message: "Advisor fetched.", data: advisor });
});

const create = asyncHandler(async (req, res) => {
  const advisor = await advisorService.create(req.body, req.file, req.user.id);
  sendCreated(res, "Advisor created.", advisor);
});

const update = asyncHandler(async (req, res) => {
  const advisor = await advisorService.update(req.params.id, req.body, req.file);
  sendSuccess(res, { message: "Advisor updated.", data: advisor });
});

const remove = asyncHandler(async (req, res) => {
  await advisorService.remove(req.params.id);
  sendSuccess(res, { message: "Advisor deleted." });
});

module.exports = { list, getOne, getBySlug, create, update, remove };
