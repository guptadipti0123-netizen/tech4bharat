const asyncHandler = require("../utils/asyncHandler");
const { sendSuccess, sendCreated } = require("../utils/apiResponse");
const mentorService = require("../services/mentor.service");

const list = asyncHandler(async (req, res) => {
  const { items, meta } = await mentorService.list(req.query);
  sendSuccess(res, { message: "Mentors fetched.", data: items, meta });
});

const getOne = asyncHandler(async (req, res) => {
  const mentor = await mentorService.getById(req.params.id);
  sendSuccess(res, { message: "Mentor fetched.", data: mentor });
});

const getBySlug = asyncHandler(async (req, res) => {
  const mentor = await mentorService.getBySlug(req.params.slug);
  sendSuccess(res, { message: "Mentor fetched.", data: mentor });
});

const create = asyncHandler(async (req, res) => {
  const mentor = await mentorService.create(req.body, req.file, req.user.id);
  sendCreated(res, "Mentor created.", mentor);
});

const update = asyncHandler(async (req, res) => {
  const mentor = await mentorService.update(req.params.id, req.body, req.file);
  sendSuccess(res, { message: "Mentor updated.", data: mentor });
});

const remove = asyncHandler(async (req, res) => {
  await mentorService.remove(req.params.id);
  sendSuccess(res, { message: "Mentor deleted." });
});

module.exports = { list, getOne, getBySlug, create, update, remove };
