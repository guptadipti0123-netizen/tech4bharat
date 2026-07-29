const { pool } = require("../config/db");
const createBaseModel = require("./baseModel");
const base = createBaseModel("mentors");

module.exports = {
  ...base,

  async findBySlug(slug) {
    return base.findOne("slug = ?", [slug]);
  },

  async getExpertise(mentorId) {
    const [rows] = await pool.query("SELECT skill FROM mentor_expertise WHERE mentor_id = ?", [mentorId]);
    return rows.map((row) => row.skill);
  },

  async setExpertise(mentorId, skills = []) {
    await pool.query("DELETE FROM mentor_expertise WHERE mentor_id = ?", [mentorId]);
    if (skills.length === 0) return;
    const values = skills.map((skill) => [mentorId, skill]);
    await pool.query("INSERT INTO mentor_expertise (mentor_id, skill) VALUES ?", [values]);
  },
};
