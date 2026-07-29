const express = require("express");
const { body, param } = require("express-validator");
const controller = require("../controllers/blog.controller");
const validate = require("../middleware/validate.middleware");
const { authenticate } = require("../middleware/auth.middleware");
const { requirePermission } = require("../middleware/rbac.middleware");
const { createUploader } = require("../middleware/upload.middleware");

const router = express.Router();
const upload = createUploader("blogs");

router.get("/", controller.list);
router.get("/slug/:slug", controller.getBySlug);
router.get("/:id", [param("id").isInt()], validate, controller.getOne);

router.post(
  "/",
  authenticate,
  requirePermission("blogs", "create"),
  upload.single("coverImage"),
  [
    body("title").trim().notEmpty().withMessage("Title is required."),
    body("excerpt").optional().trim(),
    body("status").optional().isIn(["draft", "published"]),
    body("readTimeMinutes").optional().isInt({ min: 1, max: 60 }),
  ],
  validate,
  controller.create
);

router.put(
  "/:id",
  authenticate,
  requirePermission("blogs", "update"),
  upload.single("coverImage"),
  [
    param("id").isInt(),
    body("title").optional().trim().notEmpty(),
    body("status").optional().isIn(["draft", "published"]),
    body("readTimeMinutes").optional().isInt({ min: 1, max: 60 }),
  ],
  validate,
  controller.update
);

router.delete(
  "/:id",
  authenticate,
  requirePermission("blogs", "delete"),
  [param("id").isInt()],
  validate,
  controller.remove
);

module.exports = router;
