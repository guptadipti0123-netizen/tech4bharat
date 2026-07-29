const asyncHandler = require("../utils/asyncHandler");
const { sendSuccess, sendCreated } = require("../utils/apiResponse");
const blogService = require("../services/blog.service");

const list = asyncHandler(async (req, res) => {
  const { items, meta } = await blogService.list(req.query);
  sendSuccess(res, { message: "Blog posts fetched.", data: items, meta });
});

const getOne = asyncHandler(async (req, res) => {
  const blog = await blogService.getById(req.params.id);
  sendSuccess(res, { message: "Blog post fetched.", data: blog });
});

const getBySlug = asyncHandler(async (req, res) => {
  const blog = await blogService.getBySlug(req.params.slug);
  sendSuccess(res, { message: "Blog post fetched.", data: blog });
});

const create = asyncHandler(async (req, res) => {
  const blog = await blogService.create(req.body, req.file, req.user.id);
  sendCreated(res, "Blog post created.", blog);
});

const update = asyncHandler(async (req, res) => {
  const blog = await blogService.update(req.params.id, req.body, req.file);
  sendSuccess(res, { message: "Blog post updated.", data: blog });
});

const remove = asyncHandler(async (req, res) => {
  await blogService.remove(req.params.id);
  sendSuccess(res, { message: "Blog post deleted." });
});

module.exports = { list, getOne, getBySlug, create, update, remove };
