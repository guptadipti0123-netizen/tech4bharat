const asyncHandler = require("../utils/asyncHandler");
const { sendSuccess, sendCreated } = require("../utils/apiResponse");
const categoryService = require("../services/category.service");

const list = asyncHandler(async (req, res) => {
  if (req.query.type) {
    const categories = await categoryService.listByType(req.query.type);
    sendSuccess(res, { message: "Categories fetched.", data: categories });
    return;
  }
  const { items, meta } = await categoryService.list(req.query);
  sendSuccess(res, { message: "Categories fetched.", data: items, meta });
});

const create = asyncHandler(async (req, res) => {
  const category = await categoryService.create(req.body);
  sendCreated(res, "Category created.", category);
});

const remove = asyncHandler(async (req, res) => {
  await categoryService.remove(req.params.id);
  sendSuccess(res, { message: "Category deleted." });
});

module.exports = { list, create, remove };
