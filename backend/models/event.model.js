const { pool } = require("../config/db");
const createBaseModel = require("./baseModel");
const base = createBaseModel("events");

module.exports = {
  ...base,

  async findBySlug(slug) {
    return base.findOne("slug = ?", [slug]);
  },

  async getSpeakers(eventId) {
    const [rows] = await pool.query("SELECT id, name, designation FROM event_speakers WHERE event_id = ?", [
      eventId,
    ]);
    return rows;
  },

  async setSpeakers(eventId, speakers = []) {
    await pool.query("DELETE FROM event_speakers WHERE event_id = ?", [eventId]);
    if (speakers.length === 0) return;
    const values = speakers.map((speaker) => [eventId, speaker.name, speaker.designation || null]);
    await pool.query("INSERT INTO event_speakers (event_id, name, designation) VALUES ?", [values]);
  },
};
