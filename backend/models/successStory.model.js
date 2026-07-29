const { pool } = require("../config/db");
const createBaseModel = require("./baseModel");
const base = createBaseModel("success_stories");

const SELECT_WITH_CATEGORY = `
  SELECT s.*, c.name AS category_name, c.slug AS category_slug
  FROM success_stories s
  LEFT JOIN categories c ON c.id = s.domain_category_id
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

  // Overrides baseModel.count — mirrors the categories join used by list()'s filters.
  async count({ where = "1=1", params = [] } = {}) {
    const [rows] = await pool.query(
      `SELECT COUNT(*) AS total FROM success_stories s LEFT JOIN categories c ON c.id = s.domain_category_id WHERE ${where}`,
      params
    );
    return rows[0].total;
  },

  async getMetrics(storyId) {
    const [rows] = await pool.query(
      "SELECT id, label, value FROM success_story_metrics WHERE success_story_id = ?",
      [storyId]
    );
    return rows;
  },

  async setMetrics(storyId, metrics = []) {
    await pool.query("DELETE FROM success_story_metrics WHERE success_story_id = ?", [storyId]);
    if (metrics.length === 0) return;
    const values = metrics.map((metric) => [storyId, metric.label, metric.value]);
    await pool.query("INSERT INTO success_story_metrics (success_story_id, label, value) VALUES ?", [values]);
  },
};
