const express = require("express");
const { body, param } = require("express-validator");
const controller = require("../controllers/newsletter.controller");
const validate = require("../middleware/validate.middleware");
const { authenticate } = require("../middleware/auth.middleware");
const { requirePermission } = require("../middleware/rbac.middleware");

const router = express.Router();

// Public — visitors subscribe/unsubscribe themselves.
router.post(
  "/subscribe",
  [body("email").isEmail().withMessage("A valid email is required.").normalizeEmail()],
  validate,
  controller.subscribe
);
router.post(
  "/unsubscribe",
  [body("email").isEmail().withMessage("A valid email is required.").normalizeEmail()],
  validate,
  controller.unsubscribe
);

router.get("/", authenticate, requirePermission("newsletter", "read"), controller.list);
router.get("/export", authenticate, requirePermission("newsletter", "read"), controller.exportCsv);
router.delete(
  "/:id",
  authenticate,
  requirePermission("newsletter", "delete"),
  [param("id").isInt()],
  validate,
  controller.remove
);

module.exports = router;
