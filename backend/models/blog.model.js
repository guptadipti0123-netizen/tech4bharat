const { pool } = require("../config/db");
const createBaseModel = require("./baseModel");
const base = createBaseModel("blogs");

const SELECT_WITH_JOINS = `
  SELECT b.*, c.name AS category_name, c.slug AS category_slug, u.name AS author_name
  FROM blogs b
  LEFT JOIN categories c ON c.id = b.category_id
  LEFT JOIN users u ON u.id = b.author_id
`;

module.exports = {
  ...base,

  async findBySlug(slug) {
    const [rows] = await pool.query(`${SELECT_WITH_JOINS} WHERE b.slug = ? LIMIT 1`, [slug]);
    return rows[0] || null;
  },

  async list({ where = "1=1", params = [], limit, offset, orderBy = "b.created_at DESC" } = {}) {
    let sql = `${SELECT_WITH_JOINS} WHERE ${where} ORDER BY ${orderBy}`;
    const queryParams = [...params];
    if (typeof limit === "number") {
      sql += " LIMIT ? OFFSET ?";
      queryParams.push(limit, offset || 0);
    }
    const [rows] = await pool.query(sql, queryParams);
    return rows;
  },

  // Overrides baseModel.count — mirrors the categories/users joins used by list()'s filters.
  async count({ where = "1=1", params = [] } = {}) {
    const [rows] = await pool.query(
      `SELECT COUNT(*) AS total FROM blogs b
       LEFT JOIN categories c ON c.id = b.category_id
       LEFT JOIN users u ON u.id = b.author_id
       WHERE ${where}`,
      params
    );
    return rows[0].total;
  },
};
