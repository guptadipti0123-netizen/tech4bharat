const express = require("express");
const { body, param } = require("express-validator");
const controller = require("../controllers/gallery.controller");
const validate = require("../middleware/validate.middleware");
const { authenticate } = require("../middleware/auth.middleware");
const { requirePermission } = require("../middleware/rbac.middleware");
const { createUploader } = require("../middleware/upload.middleware");

const router = express.Router();
const upload = createUploader("gallery");

router.get("/", controller.list);
router.get("/:id", [param("id").isInt()], validate, controller.getOne);

router.post(
  "/",
  authenticate,
  requirePermission("gallery", "create"),
  upload.single("image"),
  [body("title").optional().trim(), body("eventId").optional().isInt()],
  validate,
  controller.create
);

router.put(
  "/:id",
  authenticate,
  requirePermission("gallery", "update"),
  [param("id").isInt(), body("title").optional().trim(), body("eventId").optional().isInt()],
  validate,
  controller.update
);

router.delete(
  "/:id",
  authenticate,
  requirePermission("gallery", "delete"),
  [param("id").isInt()],
  validate,
  controller.remove
);

module.exports = router;
