const asyncHandler = require("../utils/asyncHandler");
const { sendSuccess, sendCreated } = require("../utils/apiResponse");
const galleryService = require("../services/gallery.service");

const list = asyncHandler(async (req, res) => {
  const { items, meta } = await galleryService.list(req.query);
  sendSuccess(res, { message: "Gallery images fetched.", data: items, meta });
});

const getOne = asyncHandler(async (req, res) => {
  const image = await galleryService.getById(req.params.id);
  sendSuccess(res, { message: "Gallery image fetched.", data: image });
});

const create = asyncHandler(async (req, res) => {
  const image = await galleryService.create(req.body, req.file, req.user.id);
  sendCreated(res, "Gallery image uploaded.", image);
});

const update = asyncHandler(async (req, res) => {
  const image = await galleryService.update(req.params.id, req.body);
  sendSuccess(res, { message: "Gallery image updated.", data: image });
});

const remove = asyncHandler(async (req, res) => {
  await galleryService.remove(req.params.id);
  sendSuccess(res, { message: "Gallery image deleted." });
});

module.exports = { list, getOne, create, update, remove };
