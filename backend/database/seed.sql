-- =====================================================================
-- Reference seed data for roles + starter categories.
-- This file is the source of truth for role permissions; database/seed.js
-- executes it and then additionally creates the bcrypt-hashed Super Admin
-- user from your .env values.
-- =====================================================================

USE tech4bharat;

-- ---------------------------------------------------------------------
-- Roles & permissions
-- Convention: "<resource>:<action>" | "<resource>:manage" (= create/read/update/delete) | "*" (= everything)
-- ---------------------------------------------------------------------
INSERT INTO roles (name, slug, description, permissions) VALUES
('Super Admin', 'super-admin', 'Full, unrestricted access to every resource, including user management.',
  JSON_ARRAY('*')),

('Admin', 'admin', 'Manages all content and users, short of altering Super Admin accounts.',
  JSON_ARRAY(
    'users:manage', 'roles:read',
    'startups:manage', 'mentors:manage', 'advisors:manage', 'partners:manage',
    'events:manage', 'blogs:manage', 'categories:manage', 'gallery:manage',
    'testimonials:manage', 'success-stories:manage',
    'contact:manage', 'newsletter:manage', 'settings:manage', 'dashboard:view'
  )),

('Content Manager', 'content-manager', 'Full control over public-facing content, no user or system settings access.',
  JSON_ARRAY(
    'startups:manage', 'mentors:manage', 'advisors:manage', 'partners:manage',
    'events:manage', 'blogs:manage', 'categories:manage', 'gallery:manage',
    'testimonials:manage', 'success-stories:manage',
    'dashboard:view'
  )),

('Editor', 'editor', 'Can create and update content but cannot delete or manage users/settings.',
  JSON_ARRAY(
    'startups:create', 'startups:read', 'startups:update',
    'mentors:create', 'mentors:read', 'mentors:update',
    'advisors:create', 'advisors:read', 'advisors:update',
    'partners:create', 'partners:read', 'partners:update',
    'events:create', 'events:read', 'events:update',
    'blogs:create', 'blogs:read', 'blogs:update',
    'gallery:create', 'gallery:read',
    'testimonials:create', 'testimonials:read', 'testimonials:update',
    'success-stories:create', 'success-stories:read', 'success-stories:update',
    'dashboard:view'
  )),

('Viewer', 'viewer', 'Read-only access across the admin panel.',
  JSON_ARRAY(
    'startups:read', 'mentors:read', 'advisors:read', 'partners:read',
    'events:read', 'blogs:read', 'gallery:read', 'contact:read',
    'newsletter:read', 'testimonials:read', 'success-stories:read', 'dashboard:view'
  ))
ON DUPLICATE KEY UPDATE
  description = VALUES(description),
  permissions = VALUES(permissions);

-- ---------------------------------------------------------------------
-- Starter categories
-- ---------------------------------------------------------------------
INSERT INTO categories (name, slug, type) VALUES
('AgriTech', 'agritech', 'startup_domain'),
('HealthTech', 'healthtech', 'startup_domain'),
('EdTech', 'edtech', 'startup_domain'),
('FinTech', 'fintech', 'startup_domain'),
('ClimateTech', 'climatetech', 'startup_domain'),
('DeepTech', 'deeptech', 'startup_domain'),

('Ecosystem', 'ecosystem', 'blog_category'),
('Fundraising', 'fundraising', 'blog_category'),
('Mentorship', 'mentorship', 'blog_category'),
('Policy', 'policy', 'blog_category'),
('Product', 'product', 'blog_category'),

('Academic Institutions', 'academic-institutions', 'partner_category'),
('Government Bodies', 'government-bodies', 'partner_category'),
('NGOs', 'ngos', 'partner_category'),
('Industry Partners', 'industry-partners', 'partner_category'),
('Research Organizations', 'research-organizations', 'partner_category'),
('Investor Networks', 'investor-networks', 'partner_category')
ON DUPLICATE KEY UPDATE name = VALUES(name);

-- ---------------------------------------------------------------------
-- Homepage CMS defaults (site_settings)
-- "Featured Startups" / "Partners" / "Testimonials" / "Latest Blogs" are NOT
-- stored here — the homepage pulls those live from each resource's own table,
-- filtered by is_featured / status. These entries only cover the editable
-- copy blocks: Hero, Homepage Statistics, and the Contact CTA.
-- ---------------------------------------------------------------------
INSERT INTO site_settings (section_key, content) VALUES
('hero', JSON_OBJECT(
  'badgeText', 'Building India''s Startup Future',
  'title', 'Empowering Bold Ideas to Build Tomorrow''s Bharat',
  'description', 'Tech4Bharat is a startup incubator helping ambitious founders turn ideas into category-defining companies — through mentorship, capital, and community.',
  'primaryCta', JSON_OBJECT('label', 'Explore Programs', 'href', '/programs'),
  'secondaryCta', JSON_OBJECT('label', 'Partner With Us', 'href', '/contact')
)),
('impact_stats', JSON_ARRAY(
  JSON_OBJECT('label', 'Startups Incubated', 'value', 150, 'suffix', '+'),
  JSON_OBJECT('label', 'Funding Raised (₹ Cr)', 'value', 120, 'suffix', '+'),
  JSON_OBJECT('label', 'Jobs Created', 'value', 3200, 'suffix', '+'),
  JSON_OBJECT('label', 'Mentor Network', 'value', 80, 'suffix', '+')
)),
('contact_cta', JSON_OBJECT(
  'title', 'Have a bold idea? Let''s build it together.',
  'description', 'Whether you''re a founder, mentor, or partner — we''d love to hear from you.',
  'email', 'hello@tech4bharat.org'
))
ON DUPLICATE KEY UPDATE content = VALUES(content);
