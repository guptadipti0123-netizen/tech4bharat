const express = require("express");
const { body, param } = require("express-validator");
const controller = require("../controllers/testimonial.controller");
const validate = require("../middleware/validate.middleware");
const { authenticate } = require("../middleware/auth.middleware");
const { requirePermission } = require("../middleware/rbac.middleware");
const { createUploader } = require("../middleware/upload.middleware");

const router = express.Router();
const upload = createUploader("testimonials");

router.get("/", controller.list);
router.get("/:id", [param("id").isInt()], validate, controller.getOne);

router.post(
  "/",
  authenticate,
  requirePermission("testimonials", "create"),
  upload.single("avatar"),
  [
    body("authorName").trim().notEmpty().withMessage("Author name is required."),
    body("quote").trim().notEmpty().withMessage("Quote is required."),
    body("rating").optional().isInt({ min: 1, max: 5 }),
    body("status").optional().isIn(["draft", "published"]),
  ],
  validate,
  controller.create
);

router.put(
  "/:id",
  authenticate,
  requirePermission("testimonials", "update"),
  upload.single("avatar"),
  [
    param("id").isInt(),
    body("authorName").optional().trim().notEmpty(),
    body("quote").optional().trim().notEmpty(),
    body("rating").optional().isInt({ min: 1, max: 5 }),
    body("status").optional().isIn(["draft", "published"]),
  ],
  validate,
  controller.update
);

router.delete(
  "/:id",
  authenticate,
  requirePermission("testimonials", "delete"),
  [param("id").isInt()],
  validate,
  controller.remove
);

module.exports = router;
