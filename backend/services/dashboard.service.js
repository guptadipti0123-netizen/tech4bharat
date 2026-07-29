const { pool } = require("../config/db");

async function getCounts() {
  const queries = {
    totalStartups: "SELECT COUNT(*) AS total FROM startups",
    totalMentors: "SELECT COUNT(*) AS total FROM mentors",
    totalAdvisors: "SELECT COUNT(*) AS total FROM advisors",
    totalPartners: "SELECT COUNT(*) AS total FROM partners",
    totalEvents: "SELECT COUNT(*) AS total FROM events",
    totalBlogs: "SELECT COUNT(*) AS total FROM blogs",
    totalTestimonials: "SELECT COUNT(*) AS total FROM testimonials",
    totalSuccessStories: "SELECT COUNT(*) AS total FROM success_stories",
    totalGalleryImages: "SELECT COUNT(*) AS total FROM gallery_images",
    totalMessages: "SELECT COUNT(*) AS total FROM contact_messages",
    unreadMessages: "SELECT COUNT(*) AS total FROM contact_messages WHERE is_read = 0",
    newsletterSubscribers: "SELECT COUNT(*) AS total FROM newsletter_subscribers WHERE is_active = 1",
  };

  const entries = await Promise.all(
    Object.entries(queries).map(async ([key, sql]) => {
      const [rows] = await pool.query(sql);
      return [key, rows[0].total];
    })
  );

  return Object.fromEntries(entries);
}

async function getRecentActivity(limit = 10) {
  const sql = `
    (SELECT 'startup' AS type, name AS title, created_at FROM startups ORDER BY created_at DESC LIMIT ?)
    UNION ALL
    (SELECT 'blog' AS type, title, created_at FROM blogs ORDER BY created_at DESC LIMIT ?)
    UNION ALL
    (SELECT 'event' AS type, title, created_at FROM events ORDER BY created_at DESC LIMIT ?)
    UNION ALL
    (SELECT 'contact_message' AS type, CONCAT(name, ' — ', COALESCE(subject, 'New message')) AS title, created_at
       FROM contact_messages ORDER BY created_at DESC LIMIT ?)
    UNION ALL
    (SELECT 'newsletter_subscriber' AS type, email AS title, subscribed_at AS created_at
       FROM newsletter_subscribers ORDER BY subscribed_at DESC LIMIT ?)
    ORDER BY created_at DESC
    LIMIT ?
  `;
  const [rows] = await pool.query(sql, [limit, limit, limit, limit, limit, limit]);
  return rows;
}

module.exports = { getCounts, getRecentActivity };
