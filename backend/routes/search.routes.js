const express = require("express");
const controller = require("../controllers/search.controller");

const router = express.Router();

// Public — powers the site-wide search box.
router.get("/", controller.search);

module.exports = router;
