const asyncHandler = require("../utils/asyncHandler");
const { sendSuccess } = require("../utils/apiResponse");
const AppError = require("../utils/AppError");
const searchService = require("../services/search.service");

const search = asyncHandler(async (req, res) => {
  const { q } = req.query;
  if (!q || q.trim().length < 2) {
    throw AppError.badRequest("Query parameter 'q' must be at least 2 characters.");
  }
  const results = await searchService.globalSearch(q.trim());
  sendSuccess(res, { message: "Search results fetched.", data: results });
});

module.exports = { search };
