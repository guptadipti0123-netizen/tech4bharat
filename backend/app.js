const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");

const config = require("./config/env");
const routes = require("./routes");
const notFound = require("./middleware/notFound.middleware");
const errorHandler = require("./middleware/errorHandler.middleware");
const { apiLimiter } = require("./middleware/rateLimiter.middleware");

const app = express();

// Behind a reverse proxy (e.g. Nginx, a PaaS) this makes req.ip / rate limiting honor X-Forwarded-For.
app.set("trust proxy", 1);

app.use(helmet());
app.use(
  cors({
    origin: config.frontendUrl.split(",").map((origin) => origin.trim()),
    credentials: true,
  })
);
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

if (config.env !== "test") {
  app.use(morgan(config.env === "production" ? "combined" : "dev"));
}

// Publicly serve uploaded images (logos, photos, banners, gallery, blog covers).
app.use("/uploads", express.static(path.join(__dirname, config.upload.baseDir)));

app.use(config.apiPrefix, apiLimiter, routes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
