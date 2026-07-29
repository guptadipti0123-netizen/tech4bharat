const { pool } = require("../config/db");
const createBaseModel = require("./baseModel");
const base = createBaseModel("users");

const SELECT_WITH_ROLE = `
  SELECT u.id, u.name, u.email, u.password_hash, u.role_id, u.avatar_path, u.is_active,
         u.last_login_at, u.created_by, u.created_at, u.updated_at,
         r.name AS role_name, r.slug AS role_slug, r.permissions
  FROM users u
  JOIN roles r ON r.id = u.role_id
`;

module.exports = {
  ...base,

  async findByEmailWithRole(email) {
    const [rows] = await pool.query(`${SELECT_WITH_ROLE} WHERE u.email = ? LIMIT 1`, [email]);
    return rows[0] || null;
  },

  async findByIdWithRole(id) {
    const [rows] = await pool.query(`${SELECT_WITH_ROLE} WHERE u.id = ? LIMIT 1`, [id]);
    return rows[0] || null;
  },

  async listWithRole({ limit, offset } = {}) {
    let sql = `${SELECT_WITH_ROLE} ORDER BY u.created_at DESC`;
    const params = [];
    if (typeof limit === "number") {
      sql += " LIMIT ? OFFSET ?";
      params.push(limit, offset || 0);
    }
    const [rows] = await pool.query(sql, params);
    return rows;
  },

  async touchLastLogin(id) {
    await pool.query("UPDATE users SET last_login_at = NOW() WHERE id = ?", [id]);
  },
};
