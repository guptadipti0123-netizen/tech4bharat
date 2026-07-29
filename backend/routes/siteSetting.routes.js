const express = require("express");
const { body, param } = require("express-validator");
const controller = require("../controllers/siteSetting.controller");
const validate = require("../middleware/validate.middleware");
const { authenticate } = require("../middleware/auth.middleware");
const { requirePermission } = require("../middleware/rbac.middleware");

const router = express.Router();

// Public — the homepage reads its editable content from here.
router.get("/", controller.list);
router.get("/:sectionKey", [param("sectionKey").trim().notEmpty()], validate, controller.getOne);

router.put(
  "/:sectionKey",
  authenticate,
  requirePermission("settings", "update"),
  [param("sectionKey").trim().notEmpty(), body("content").notEmpty().withMessage("content is required.")],
  validate,
  controller.upsert
);

module.exports = router;
