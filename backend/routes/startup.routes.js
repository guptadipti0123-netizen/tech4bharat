const express = require("express");
const { body, param } = require("express-validator");
const controller = require("../controllers/startup.controller");
const validate = require("../middleware/validate.middleware");
const { authenticate } = require("../middleware/auth.middleware");
const { requirePermission } = require("../middleware/rbac.middleware");
const { createUploader } = require("../middleware/upload.middleware");

const router = express.Router();
const upload = createUploader("startups");

const STAGES = ["Idea Stage", "Early Stage", "Growth Stage", "Scaled"];

router.get("/", controller.list);
router.get("/slug/:slug", controller.getBySlug);
router.get("/:id", [param("id").isInt()], validate, controller.getOne);

router.post(
  "/",
  authenticate,
  requirePermission("startups", "create"),
  upload.single("logo"),
  [
    body("name").trim().notEmpty().withMessage("Startup name is required."),
    body("founderName").trim().notEmpty().withMessage("Founder name is required."),
    body("stage").isIn(STAGES).withMessage("Invalid stage."),
    body("status").optional().isIn(["draft", "published"]),
    body("website").optional({ checkFalsy: true }).isURL().withMessage("Website must be a valid URL."),
    body("foundedYear").optional().isInt({ min: 1990, max: 2100 }),
  ],
  validate,
  controller.create
);

router.put(
  "/:id",
  authenticate,
  requirePermission("startups", "update"),
  upload.single("logo"),
  [
    param("id").isInt(),
    body("name").optional().trim().notEmpty(),
    body("founderName").optional().trim().notEmpty(),
    body("stage").optional().isIn(STAGES),
    body("status").optional().isIn(["draft", "published"]),
    body("website").optional({ checkFalsy: true }).isURL(),
    body("foundedYear").optional().isInt({ min: 1990, max: 2100 }),
  ],
  validate,
  controller.update
);

router.delete(
  "/:id",
  authenticate,
  requirePermission("startups", "delete"),
  [param("id").isInt()],
  validate,
  controller.remove
);

module.exports = router;
