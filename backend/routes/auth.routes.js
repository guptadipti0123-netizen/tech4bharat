const express = require("express");
const { body } = require("express-validator");
const controller = require("../controllers/auth.controller");
const validate = require("../middleware/validate.middleware");
const { authenticate } = require("../middleware/auth.middleware");
const { authLimiter } = require("../middleware/rateLimiter.middleware");

const router = express.Router();

router.post(
  "/login",
  authLimiter,
  [
    body("email").isEmail().withMessage("A valid email is required.").normalizeEmail(),
    body("password").notEmpty().withMessage("Password is required."),
  ],
  validate,
  controller.login
);

router.post("/refresh", authLimiter, controller.refresh);
router.post("/logout", controller.logout);
router.get("/me", authenticate, controller.me);

module.exports = router;
