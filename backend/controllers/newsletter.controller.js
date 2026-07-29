const asyncHandler = require("../utils/asyncHandler");
const { sendSuccess, sendCreated } = require("../utils/apiResponse");
const newsletterService = require("../services/newsletter.service");
const toCsv = require("../utils/toCsv");

const CSV_COLUMNS = [
  { key: "id", label: "ID" },
  { key: "email", label: "Email" },
  { key: "is_active", label: "Active" },
  { key: "subscribed_at", label: "Subscribed At" },
  { key: "unsubscribed_at", label: "Unsubscribed At" },
];

const subscribe = asyncHandler(async (req, res) => {
  const subscriber = await newsletterService.subscribe(req.body.email);
  sendCreated(res, "Subscribed successfully.", subscriber);
});

const unsubscribe = asyncHandler(async (req, res) => {
  await newsletterService.unsubscribe(req.body.email);
  sendSuccess(res, { message: "Unsubscribed successfully." });
});

const list = asyncHandler(async (req, res) => {
  const { items, meta } = await newsletterService.list(req.query);
  sendSuccess(res, { message: "Subscribers fetched.", data: items, meta });
});

const remove = asyncHandler(async (req, res) => {
  await newsletterService.remove(req.params.id);
  sendSuccess(res, { message: "Subscriber removed." });
});

const exportCsv = asyncHandler(async (req, res) => {
  const subscribers = await newsletterService.exportAll();
  const csv = toCsv(subscribers, CSV_COLUMNS);

  res.setHeader("Content-Type", "text/csv; charset=utf-8");
  res.setHeader("Content-Disposition", `attachment; filename="newsletter-subscribers-${Date.now()}.csv"`);
  res.status(200).send(csv);
});

module.exports = { subscribe, unsubscribe, list, remove, exportCsv };
