const express = require("express");
const { body, param } = require("express-validator");
const controller = require("../controllers/user.controller");
const validate = require("../middleware/validate.middleware");
const { authenticate } = require("../middleware/auth.middleware");
const { requirePermission } = require("../middleware/rbac.middleware");

const router = express.Router();

// Every user-management route requires authentication — there is no public registration.
router.use(authenticate);

router.get("/", requirePermission("users", "read"), controller.list);

router.get("/:id", requirePermission("users", "read"), [param("id").isInt()], validate, controller.getOne);

router.post(
  "/",
  requirePermission("users", "create"),
  [
    body("name").trim().notEmpty().withMessage("Name is required."),
    body("email").isEmail().withMessage("A valid email is required.").normalizeEmail(),
    body("password").isLength({ min: 8 }).withMessage("Password must be at least 8 characters."),
    body("roleId").isInt().withMessage("A valid role is required."),
  ],
  validate,
  controller.create
);

router.put(
  "/:id",
  requirePermission("users", "update"),
  [
    param("id").isInt(),
    body("name").optional().trim().notEmpty(),
    body("email").optional().isEmail().normalizeEmail(),
    body("roleId").optional().isInt(),
    body("isActive").optional().isBoolean(),
  ],
  validate,
  controller.update
);

router.patch(
  "/:id/reset-password",
  requirePermission("users", "update"),
  [param("id").isInt(), body("password").isLength({ min: 8 })],
  validate,
  controller.resetPassword
);

router.delete("/:id", requirePermission("users", "delete"), [param("id").isInt()], validate, controller.remove);

module.exports = router;
