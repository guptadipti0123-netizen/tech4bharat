const fs = require("fs");
const path = require("path");
const config = require("../config/env");

/**
 * Storage abstraction so controllers/services never touch the filesystem
 * directly. STORAGE_DRIVER=local today; adding Cloudinary later means
 * implementing this same { getUrl, deleteFile } shape against the Cloudinary
 * SDK and flipping the env var — no controller code changes required.
 */

function getUrl(subfolder, filename) {
  if (!filename) return null;
  if (config.upload.driver === "cloudinary") {
    // Cloudinary uploads return a secure_url directly; a future
    // cloudinary.service.js would store that full URL as `filename` instead.
    return filename;
  }
  return `${config.upload.baseUrl}/${subfolder}/${filename}`;
}

function deleteFile(subfolder, filename) {
  if (!filename || config.upload.driver === "cloudinary") return;
  const filePath = path.join(__dirname, "..", config.upload.baseDir, subfolder, filename);
  fs.promises.unlink(filePath).catch(() => {
    // Non-fatal — the DB record is the source of truth; a file missing on
    // disk shouldn't block the API response.
  });
}

module.exports = { getUrl, deleteFile };
