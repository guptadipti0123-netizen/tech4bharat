/** multipart/form-data always sends strings — normalizes "true"/"false"/"1"/"0" (and real booleans) to a boolean. */
function parseBoolean(value) {
  if (typeof value === "boolean") return value;
  if (typeof value === "string") return value.toLowerCase() === "true" || value === "1";
  return Boolean(value);
}

module.exports = parseBoolean;
