/** Converts a title into a URL-safe slug, e.g. "AgroSense & Co." -> "agrosense-co". */
function slugify(value) {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

module.exports = slugify;
