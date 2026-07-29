const express = require("express");
const { body, param } = require("express-validator");
const controller = require("../controllers/contact.controller");
const validate = require("../middleware/validate.middleware");
const { authenticate } = require("../middleware/auth.middleware");
const { requirePermission } = require("../middleware/rbac.middleware");

const router = express.Router();

// Public — the Contact page form submits here with no authentication.
router.post(
  "/",
  [
    body("name").trim().notEmpty().withMessage("Name is required."),
    body("email").isEmail().withMessage("A valid email is required.").normalizeEmail(),
    body("subject").optional().trim(),
    body("message").trim().isLength({ min: 10 }).withMessage("Message must be at least 10 characters."),
  ],
  validate,
  controller.submit
);

router.get("/", authenticate, requirePermission("contact", "read"), controller.list);
router.get(
  "/:id",
  authenticate,
  requirePermission("contact", "read"),
  [param("id").isInt()],
  validate,
  controller.getOne
);
router.patch(
  "/:id/read",
  authenticate,
  requirePermission("contact", "update"),
  [param("id").isInt(), body("isRead").optional().isBoolean()],
  validate,
  controller.markRead
);
router.delete(
  "/:id",
  authenticate,
  requirePermission("contact", "delete"),
  [param("id").isInt()],
  validate,
  controller.remove
);

module.exports = router;
