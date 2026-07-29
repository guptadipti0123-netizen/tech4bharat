const express = require("express");
const { body, param } = require("express-validator");
const controller = require("../controllers/event.controller");
const validate = require("../middleware/validate.middleware");
const { authenticate } = require("../middleware/auth.middleware");
const { requirePermission } = require("../middleware/rbac.middleware");
const { createUploader } = require("../middleware/upload.middleware");

const router = express.Router();
const upload = createUploader("events");

const TYPES = ["Bootcamp", "Workshop", "Summit", "Webinar", "Challenge"];
const STATUSES = ["Upcoming", "Past"];

router.get("/", controller.list);
router.get("/slug/:slug", controller.getBySlug);
router.get("/:id", [param("id").isInt()], validate, controller.getOne);

router.post(
  "/",
  authenticate,
  requirePermission("events", "create"),
  upload.single("banner"),
  [
    body("title").trim().notEmpty().withMessage("Event title is required."),
    body("type").isIn(TYPES).withMessage("Invalid event type."),
    body("status").optional().isIn(STATUSES),
    body("eventDateLabel").trim().notEmpty().withMessage("A display date (e.g. 'Sept 12-14, 2026') is required."),
    body("startDate").optional({ checkFalsy: true }).isISO8601(),
  ],
  validate,
  controller.create
);

router.put(
  "/:id",
  authenticate,
  requirePermission("events", "update"),
  upload.single("banner"),
  [
    param("id").isInt(),
    body("title").optional().trim().notEmpty(),
    body("type").optional().isIn(TYPES),
    body("status").optional().isIn(STATUSES),
    body("eventDateLabel").optional().trim().notEmpty(),
    body("startDate").optional({ checkFalsy: true }).isISO8601(),
  ],
  validate,
  controller.update
);

router.delete(
  "/:id",
  authenticate,
  requirePermission("events", "delete"),
  [param("id").isInt()],
  validate,
  controller.remove
);

module.exports = router;
