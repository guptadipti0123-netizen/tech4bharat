const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const config = require("../config/env");
const AppError = require("../utils/AppError");

const ALLOWED_MIME_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);

/** Builds a Multer instance writing image uploads into uploads/<subfolder>/ with a random filename. */
function createUploader(subfolder) {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "..", config.upload.baseDir, subfolder));
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname).toLowerCase();
      cb(null, `${uuidv4()}${ext}`);
    },
  });

  const fileFilter = (req, file, cb) => {
    if (!ALLOWED_MIME_TYPES.has(file.mimetype)) {
      cb(AppError.badRequest("Only JPEG, PNG, WEBP, or GIF images are allowed."));
      return;
    }
    cb(null, true);
  };

  return multer({
    storage,
    fileFilter,
    limits: { fileSize: config.upload.maxFileSizeMb * 1024 * 1024 },
  });
}

module.exports = { createUploader };
