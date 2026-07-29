const { pool } = require("../config/db");
const createBaseModel = require("./baseModel");
const base = createBaseModel("startups");

const SELECT_WITH_CATEGORY = `
  SELECT s.*, c.name AS category_name, c.slug AS category_slug
  FROM startups s
  LEFT JOIN categories c ON c.id = s.category_id
`;

module.exports = {
  ...base,

  async findBySlug(slug) {
    const [rows] = await pool.query(`${SELECT_WITH_CATEGORY} WHERE s.slug = ? LIMIT 1`, [slug]);
    return rows[0] || null;
  },

  async list({ where = "1=1", params = [], limit, offset, orderBy = "s.created_at DESC" } = {}) {
    let sql = `${SELECT_WITH_CATEGORY} WHERE ${where} ORDER BY ${orderBy}`;
    const queryParams = [...params];
    if (typeof limit === "number") {
      sql += " LIMIT ? OFFSET ?";
      queryParams.push(limit, offset || 0);
    }
    const [rows] = await pool.query(sql, queryParams);
    return rows;
  },

  // Overrides baseModel.count — the filterable `where` clause may reference
  // the joined `c` (categories) alias, so the count query needs the same join.
  async count({ where = "1=1", params = [] } = {}) {
    const [rows] = await pool.query(
      `SELECT COUNT(*) AS total FROM startups s LEFT JOIN categories c ON c.id = s.category_id WHERE ${where}`,
      params
    );
    return rows[0].total;
  },
};
