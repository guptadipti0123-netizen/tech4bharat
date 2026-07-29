const { pool } = require("../config/db");
const createBaseModel = require("./baseModel");
const base = createBaseModel("partners");

const SELECT_WITH_CATEGORY = `
  SELECT p.*, c.name AS category_name, c.slug AS category_slug
  FROM partners p
  LEFT JOIN categories c ON c.id = p.category_id
`;

module.exports = {
  ...base,

  async list({ where = "1=1", params = [], limit, offset, orderBy = "p.created_at DESC" } = {}) {
    let sql = `${SELECT_WITH_CATEGORY} WHERE ${where} ORDER BY ${orderBy}`;
    const queryParams = [...params];
    if (typeof limit === "number") {
      sql += " LIMIT ? OFFSET ?";
      queryParams.push(limit, offset || 0);
    }
    const [rows] = await pool.query(sql, queryParams);
    return rows;
  },

  // Overrides baseModel.count — mirrors the categories join used by list()'s filters.
  async count({ where = "1=1", params = [] } = {}) {
    const [rows] = await pool.query(
      `SELECT COUNT(*) AS total FROM partners p LEFT JOIN categories c ON c.id = p.category_id WHERE ${where}`,
      params
    );
    return rows[0].total;
  },
};
