const express = require("express");
const controller = require("../controllers/role.controller");
const { authenticate } = require("../middleware/auth.middleware");
const { requirePermission } = require("../middleware/rbac.middleware");

const router = express.Router();

router.get("/", authenticate, requirePermission("roles", "read"), controller.list);

module.exports = router;
