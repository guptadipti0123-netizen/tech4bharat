const express = require("express");
const { body, param } = require("express-validator");
const controller = require("../controllers/mentor.controller");
const validate = require("../middleware/validate.middleware");
const { authenticate } = require("../middleware/auth.middleware");
const { requirePermission } = require("../middleware/rbac.middleware");
const { createUploader } = require("../middleware/upload.middleware");

const router = express.Router();
const upload = createUploader("mentors");

const CATEGORIES = ["Leadership Advisors", "Industry Experts", "Academic Mentors", "Startup Mentors"];

router.get("/", controller.list);
router.get("/slug/:slug", controller.getBySlug);
router.get("/:id", [param("id").isInt()], validate, controller.getOne);

router.post(
  "/",
  authenticate,
  requirePermission("mentors", "create"),
  upload.single("photo"),
  [
    body("name").trim().notEmpty().withMessage("Name is required."),
    body("category").isIn(CATEGORIES).withMessage("Invalid mentor category."),
    body("linkedinUrl").optional({ checkFalsy: true }).isURL(),
    body("status").optional().isIn(["draft", "published"]),
  ],
  validate,
  controller.create
);

router.put(
  "/:id",
  authenticate,
  requirePermission("mentors", "update"),
  upload.single("photo"),
  [
    param("id").isInt(),
    body("name").optional().trim().notEmpty(),
    body("category").optional().isIn(CATEGORIES),
    body("linkedinUrl").optional({ checkFalsy: true }).isURL(),
    body("status").optional().isIn(["draft", "published"]),
  ],
  validate,
  controller.update
);

router.delete(
  "/:id",
  authenticate,
  requirePermission("mentors", "delete"),
  [param("id").isInt()],
  validate,
  controller.remove
);

module.exports = router;
