/** multipart/form-data can't send real arrays/objects — accepts either a JSON string or an already-parsed value. */
function parseJsonField(value, fallback = undefined) {
  if (value === undefined || value === null || value === "") return fallback;
  if (typeof value !== "string") return value;
  try {
    return JSON.parse(value);
  } catch (error) {
    return fallback;
  }
}

module.exports = parseJsonField;
