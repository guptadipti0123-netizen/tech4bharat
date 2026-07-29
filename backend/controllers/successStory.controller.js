const asyncHandler = require("../utils/asyncHandler");
const { sendSuccess, sendCreated } = require("../utils/apiResponse");
const successStoryService = require("../services/successStory.service");

const list = asyncHandler(async (req, res) => {
  const { items, meta } = await successStoryService.list(req.query);
  sendSuccess(res, { message: "Success stories fetched.", data: items, meta });
});

const getOne = asyncHandler(async (req, res) => {
  const story = await successStoryService.getById(req.params.id);
  sendSuccess(res, { message: "Success story fetched.", data: story });
});

const getBySlug = asyncHandler(async (req, res) => {
  const story = await successStoryService.getBySlug(req.params.slug);
  sendSuccess(res, { message: "Success story fetched.", data: story });
});

const create = asyncHandler(async (req, res) => {
  const story = await successStoryService.create(req.body, req.file, req.user.id);
  sendCreated(res, "Success story created.", story);
});

const update = asyncHandler(async (req, res) => {
  const story = await successStoryService.update(req.params.id, req.body, req.file);
  sendSuccess(res, { message: "Success story updated.", data: story });
});

const remove = asyncHandler(async (req, res) => {
  await successStoryService.remove(req.params.id);
  sendSuccess(res, { message: "Success story deleted." });
});

module.exports = { list, getOne, getBySlug, create, update, remove };
