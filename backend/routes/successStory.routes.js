const express = require("express");
const { body, param } = require("express-validator");
const controller = require("../controllers/successStory.controller");
const validate = require("../middleware/validate.middleware");
const { authenticate } = require("../middleware/auth.middleware");
const { requirePermission } = require("../middleware/rbac.middleware");
const { createUploader } = require("../middleware/upload.middleware");

const router = express.Router();
const upload = createUploader("success-stories");

router.get("/", controller.list);
router.get("/slug/:slug", controller.getBySlug);
router.get("/:id", [param("id").isInt()], validate, controller.getOne);

router.post(
  "/",
  authenticate,
  requirePermission("success-stories", "create"),
  upload.single("coverImage"),
  [
    body("headline").trim().notEmpty().withMessage("Headline is required."),
    body("startupName").trim().notEmpty().withMessage("Startup name is required."),
    body("founderName").trim().notEmpty().withMessage("Founder name is required."),
    body("status").optional().isIn(["draft", "published"]),
  ],
  validate,
  controller.create
);

router.put(
  "/:id",
  authenticate,
  requirePermission("success-stories", "update"),
  upload.single("coverImage"),
  [
    param("id").isInt(),
    body("headline").optional().trim().notEmpty(),
    body("startupName").optional().trim().notEmpty(),
    body("founderName").optional().trim().notEmpty(),
    body("status").optional().isIn(["draft", "published"]),
  ],
  validate,
  controller.update
);

router.delete(
  "/:id",
  authenticate,
  requirePermission("success-stories", "delete"),
  [param("id").isInt()],
  validate,
  controller.remove
);

module.exports = router;
