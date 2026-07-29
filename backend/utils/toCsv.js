/** Minimal, dependency-free CSV serializer for admin export endpoints. */
function toCsv(rows, columns) {
  const escape = (value) => {
    if (value === null || value === undefined) return "";
    const str = String(value);
    return /[",\n]/.test(str) ? `"${str.replace(/"/g, '""')}"` : str;
  };

  const header = columns.map((col) => escape(col.label)).join(",");
  const lines = rows.map((row) => columns.map((col) => escape(row[col.key])).join(","));

  return [header, ...lines].join("\n");
}

module.exports = toCsv;
