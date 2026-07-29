const express = require("express");
const { body, param } = require("express-validator");
const controller = require("../controllers/partner.controller");
const validate = require("../middleware/validate.middleware");
const { authenticate } = require("../middleware/auth.middleware");
const { requirePermission } = require("../middleware/rbac.middleware");
const { createUploader } = require("../middleware/upload.middleware");

const router = express.Router();
const upload = createUploader("partners");

router.get("/", controller.list);
router.get("/:id", [param("id").isInt()], validate, controller.getOne);

router.post(
  "/",
  authenticate,
  requirePermission("partners", "create"),
  upload.single("logo"),
  [
    body("name").trim().notEmpty().withMessage("Partner name is required."),
    body("website").optional({ checkFalsy: true }).isURL(),
    body("status").optional().isIn(["draft", "published"]),
  ],
  validate,
  controller.create
);

router.put(
  "/:id",
  authenticate,
  requirePermission("partners", "update"),
  upload.single("logo"),
  [
    param("id").isInt(),
    body("name").optional().trim().notEmpty(),
    body("website").optional({ checkFalsy: true }).isURL(),
    body("status").optional().isIn(["draft", "published"]),
  ],
  validate,
  controller.update
);

router.delete(
  "/:id",
  authenticate,
  requirePermission("partners", "delete"),
  [param("id").isInt()],
  validate,
  controller.remove
);

module.exports = router;
