const asyncHandler = require("../utils/asyncHandler");
const { sendSuccess, sendCreated } = require("../utils/apiResponse");
const eventService = require("../services/event.service");

const list = asyncHandler(async (req, res) => {
  const { items, meta } = await eventService.list(req.query);
  sendSuccess(res, { message: "Events fetched.", data: items, meta });
});

const getOne = asyncHandler(async (req, res) => {
  const event = await eventService.getById(req.params.id);
  sendSuccess(res, { message: "Event fetched.", data: event });
});

const getBySlug = asyncHandler(async (req, res) => {
  const event = await eventService.getBySlug(req.params.slug);
  sendSuccess(res, { message: "Event fetched.", data: event });
});

const create = asyncHandler(async (req, res) => {
  const event = await eventService.create(req.body, req.file, req.user.id);
  sendCreated(res, "Event created.", event);
});

const update = asyncHandler(async (req, res) => {
  const event = await eventService.update(req.params.id, req.body, req.file);
  sendSuccess(res, { message: "Event updated.", data: event });
});

const remove = asyncHandler(async (req, res) => {
  await eventService.remove(req.params.id);
  sendSuccess(res, { message: "Event deleted." });
});

module.exports = { list, getOne, getBySlug, create, update, remove };
