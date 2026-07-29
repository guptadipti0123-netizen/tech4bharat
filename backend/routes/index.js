const express = require("express");

const router = express.Router();

router.use("/auth", require("./auth.routes"));
router.use("/users", require("./user.routes"));
router.use("/roles", require("./role.routes"));
router.use("/categories", require("./category.routes"));
router.use("/startups", require("./startup.routes"));
router.use("/mentors", require("./mentor.routes"));
router.use("/advisors", require("./advisor.routes"));
router.use("/partners", require("./partner.routes"));
router.use("/events", require("./event.routes"));
router.use("/blogs", require("./blog.routes"));
router.use("/gallery", require("./gallery.routes"));
router.use("/testimonials", require("./testimonial.routes"));
router.use("/success-stories", require("./successStory.routes"));
router.use("/contact-messages", require("./contact.routes"));
router.use("/newsletter", require("./newsletter.routes"));
router.use("/dashboard", require("./dashboard.routes"));
router.use("/site-settings", require("./siteSetting.routes"));
router.use("/search", require("./search.routes"));

router.get("/health", (req, res) => {
  res.json({ success: true, message: "Tech4Bharat API is running." });
});

module.exports = router;
