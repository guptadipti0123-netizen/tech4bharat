const asyncHandler = require("../utils/asyncHandler");
const { sendSuccess } = require("../utils/apiResponse");
const dashboardService = require("../services/dashboard.service");

const getStats = asyncHandler(async (req, res) => {
  const [counts, recentActivity] = await Promise.all([
    dashboardService.getCounts(),
    dashboardService.getRecentActivity(10),
  ]);
  sendSuccess(res, { message: "Dashboard stats fetched.", data: { counts, recentActivity } });
});

module.exports = { getStats };
