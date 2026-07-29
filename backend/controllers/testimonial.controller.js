const asyncHandler = require("../utils/asyncHandler");
const { sendSuccess, sendCreated } = require("../utils/apiResponse");
const testimonialService = require("../services/testimonial.service");

const list = asyncHandler(async (req, res) => {
  const { items, meta } = await testimonialService.list(req.query);
  sendSuccess(res, { message: "Testimonials fetched.", data: items, meta });
});

const getOne = asyncHandler(async (req, res) => {
  const testimonial = await testimonialService.getById(req.params.id);
  sendSuccess(res, { message: "Testimonial fetched.", data: testimonial });
});

const create = asyncHandler(async (req, res) => {
  const testimonial = await testimonialService.create(req.body, req.file, req.user.id);
  sendCreated(res, "Testimonial created.", testimonial);
});

const update = asyncHandler(async (req, res) => {
  const testimonial = await testimonialService.update(req.params.id, req.body, req.file);
  sendSuccess(res, { message: "Testimonial updated.", data: testimonial });
});

const remove = asyncHandler(async (req, res) => {
  await testimonialService.remove(req.params.id);
  sendSuccess(res, { message: "Testimonial deleted." });
});

module.exports = { list, getOne, create, update, remove };
