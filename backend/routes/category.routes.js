const express = require("express");
const { body, param, query } = require("express-validator");
const controller = require("../controllers/category.controller");
const validate = require("../middleware/validate.middleware");
const { authenticate } = require("../middleware/auth.middleware");
const { requirePermission } = require("../middleware/rbac.middleware");

const router = express.Router();

const TYPES = ["startup_domain", "blog_category", "partner_category", "focus_area"];

// Public — the frontend needs categories to render filter pills / dropdowns.
router.get("/", [query("type").optional().isIn(TYPES)], validate, controller.list);

router.post(
  "/",
  authenticate,
  requirePermission("categories", "create"),
  [body("name").trim().notEmpty(), body("type").isIn(TYPES)],
  validate,
  controller.create
);

router.delete(
  "/:id",
  authenticate,
  requirePermission("categories", "delete"),
  [param("id").isInt()],
  validate,
  controller.remove
);

module.exports = router;
