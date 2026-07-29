const express = require("express");
const { body, param } = require("express-validator");
const controller = require("../controllers/advisor.controller");
const validate = require("../middleware/validate.middleware");
const { authenticate } = require("../middleware/auth.middleware");
const { requirePermission } = require("../middleware/rbac.middleware");
const { createUploader } = require("../middleware/upload.middleware");

const router = express.Router();
const upload = createUploader("advisors");

router.get("/", controller.list);
router.get("/slug/:slug", controller.getBySlug);
router.get("/:id", [param("id").isInt()], validate, controller.getOne);

router.post(
  "/",
  authenticate,
  requirePermission("advisors", "create"),
  upload.single("photo"),
  [
    body("name").trim().notEmpty().withMessage("Name is required."),
    body("linkedinUrl").optional({ checkFalsy: true }).isURL(),
    body("status").optional().isIn(["draft", "published"]),
  ],
  validate,
  controller.create
);

router.put(
  "/:id",
  authenticate,
  requirePermission("advisors", "update"),
  upload.single("photo"),
  [
    param("id").isInt(),
    body("name").optional().trim().notEmpty(),
    body("linkedinUrl").optional({ checkFalsy: true }).isURL(),
    body("status").optional().isIn(["draft", "published"]),
  ],
  validate,
  controller.update
);

router.delete(
  "/:id",
  authenticate,
  requirePermission("advisors", "delete"),
  [param("id").isInt()],
  validate,
  controller.remove
);

module.exports = router;
