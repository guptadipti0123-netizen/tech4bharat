const { pool } = require("../config/db");

/** Cross-table search across the resources visitors expect a search box to cover. */
async function globalSearch(query, limitPerType = 5) {
  const like = `%${query}%`;
  const limit = Number(limitPerType);

  const [startups] = await pool.query(
    `SELECT id, name, slug, tagline AS description, 'startup' AS type
     FROM startups
     WHERE status = 'published' AND (name LIKE ? OR founder_name LIKE ? OR tagline LIKE ?)
     LIMIT ?`,
    [like, like, like, limit]
  );

  const [blogs] = await pool.query(
    `SELECT id, title AS name, slug, excerpt AS description, 'blog' AS type
     FROM blogs
     WHERE status = 'published' AND (title LIKE ? OR excerpt LIKE ?)
     LIMIT ?`,
    [like, like, limit]
  );

  const [events] = await pool.query(
    `SELECT id, title AS name, slug, description, 'event' AS type
     FROM events
     WHERE title LIKE ? OR venue LIKE ?
     LIMIT ?`,
    [like, like, limit]
  );

  const [mentors] = await pool.query(
    `SELECT id, name, slug, designation AS description, 'mentor' AS type
     FROM mentors
     WHERE status = 'published' AND (name LIKE ? OR organization LIKE ?)
     LIMIT ?`,
    [like, like, limit]
  );

  return { startups, blogs, events, mentors };
}

module.exports = { globalSearch };
