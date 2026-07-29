const { pool } = require("../config/db");

/**
 * Minimal, safe CRUD helper over a single table.
 *
 * `table` and any `orderBy` / `where` SQL fragments must only ever come from
 * server-side code — never from request input — since they're concatenated
 * directly. All actual values are passed as parameterized `?` placeholders.
 */
function createBaseModel(table) {
  return {
    async findAll({ where = "1=1", params = [], orderBy = "id DESC", limit, offset } = {}) {
      let sql = `SELECT * FROM ${table} WHERE ${where} ORDER BY ${orderBy}`;
      const queryParams = [...params];
      if (typeof limit === "number") {
        sql += " LIMIT ? OFFSET ?";
        queryParams.push(limit, offset || 0);
      }
      const [rows] = await pool.query(sql, queryParams);
      return rows;
    },

    async count({ where = "1=1", params = [] } = {}) {
      const [rows] = await pool.query(`SELECT COUNT(*) AS total FROM ${table} WHERE ${where}`, params);
      return rows[0].total;
    },

    async findById(id) {
      const [rows] = await pool.query(`SELECT * FROM ${table} WHERE id = ? LIMIT 1`, [id]);
      return rows[0] || null;
    },

    async findOne(where, params = []) {
      const [rows] = await pool.query(`SELECT * FROM ${table} WHERE ${where} LIMIT 1`, params);
      return rows[0] || null;
    },

    async create(data) {
      const [result] = await pool.query(`INSERT INTO ${table} SET ?`, [data]);
      return result.insertId;
    },

    async update(id, data) {
      await pool.query(`UPDATE ${table} SET ? WHERE id = ?`, [data, id]);
    },

    async remove(id) {
      const [result] = await pool.query(`DELETE FROM ${table} WHERE id = ?`, [id]);
      return result.affectedRows > 0;
    },
  };
}

module.exports = createBaseModel;
