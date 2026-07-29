const asyncHandler = require("../utils/asyncHandler");
const { sendSuccess, sendCreated } = require("../utils/apiResponse");
const contactService = require("../services/contact.service");

const submit = asyncHandler(async (req, res) => {
  const message = await contactService.submit(req.body);
  sendCreated(res, "Thanks for reaching out — our team will get back to you soon.", message);
});

const list = asyncHandler(async (req, res) => {
  const { items, meta } = await contactService.list(req.query);
  sendSuccess(res, { message: "Messages fetched.", data: items, meta });
});

const getOne = asyncHandler(async (req, res) => {
  const message = await contactService.getById(req.params.id);
  sendSuccess(res, { message: "Message fetched.", data: message });
});

const markRead = asyncHandler(async (req, res) => {
  const message = await contactService.markRead(req.params.id, req.body.isRead !== false);
  sendSuccess(res, { message: "Message updated.", data: message });
});

const remove = asyncHandler(async (req, res) => {
  await contactService.remove(req.params.id);
  sendSuccess(res, { message: "Message deleted." });
});

module.exports = { submit, list, getOne, markRead, remove };
