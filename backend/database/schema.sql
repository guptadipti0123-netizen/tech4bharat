-- =====================================================================
-- Tech4Bharat Backend — MySQL Schema
-- Run with: mysql -u root -p < database/schema.sql
-- (or `npm run db:migrate`, which executes this file via the mysql2 pool)
-- =====================================================================

CREATE DATABASE IF NOT EXISTS tech4bharat
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE tech4bharat;

SET FOREIGN_KEY_CHECKS = 0;

-- ---------------------------------------------------------------------
-- 1. roles — RBAC roles with a JSON permission list
--    e.g. permissions = ["startups:create","startups:read", ...] or ["*"] for full access
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS roles (
  id            INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name          VARCHAR(50)  NOT NULL,
  slug          VARCHAR(50)  NOT NULL,
  description   VARCHAR(255) NULL,
  permissions   JSON         NOT NULL,
  created_at    DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uq_roles_slug (slug)
) ENGINE=InnoDB;

-- ---------------------------------------------------------------------
-- 2. users — admin panel operators only (no public self-registration)
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS users (
  id             INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name           VARCHAR(100) NOT NULL,
  email          VARCHAR(150) NOT NULL,
  password_hash  VARCHAR(255) NOT NULL,
  role_id        INT UNSIGNED NOT NULL,
  avatar_path    VARCHAR(255) NULL,
  is_active      TINYINT(1)   NOT NULL DEFAULT 1,
  last_login_at  DATETIME     NULL,
  created_by     INT UNSIGNED NULL,
  created_at     DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at     DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uq_users_email (email),
  CONSTRAINT fk_users_role FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE RESTRICT,
  CONSTRAINT fk_users_created_by FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- ---------------------------------------------------------------------
-- 3. categories — shared taxonomy for startups / blogs / partners / focus areas
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS categories (
  id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name        VARCHAR(100) NOT NULL,
  slug        VARCHAR(120) NOT NULL,
  type        ENUM('startup_domain', 'blog_category', 'partner_category', 'focus_area') NOT NULL,
  created_at  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_categories_slug_type (slug, type)
) ENGINE=InnoDB;

-- ---------------------------------------------------------------------
-- 4. startups — Startup Portfolio
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS startups (
  id            INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name          VARCHAR(150) NOT NULL,
  slug          VARCHAR(180) NOT NULL,
  founder_name  VARCHAR(150) NOT NULL,
  category_id   INT UNSIGNED NULL,
  stage         ENUM('Idea Stage', 'Early Stage', 'Growth Stage', 'Scaled') NOT NULL DEFAULT 'Idea Stage',
  tagline       VARCHAR(255) NULL,
  description   TEXT NULL,
  logo_path     VARCHAR(255) NULL,
  website       VARCHAR(255) NULL,
  founded_year  YEAR NULL,
  location      VARCHAR(150) NULL,
  status        ENUM('draft', 'published') NOT NULL DEFAULT 'draft',
  is_featured   TINYINT(1) NOT NULL DEFAULT 0,
  created_by    INT UNSIGNED NULL,
  created_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uq_startups_slug (slug),
  KEY idx_startups_status (status),
  CONSTRAINT fk_startups_category FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL,
  CONSTRAINT fk_startups_created_by FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- ---------------------------------------------------------------------
-- 5. mentors — Mentors & Advisors (mentor track)
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS mentors (
  id            INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name          VARCHAR(150) NOT NULL,
  slug          VARCHAR(180) NOT NULL,
  designation   VARCHAR(150) NULL,
  organization  VARCHAR(150) NULL,
  category      ENUM('Leadership Advisors', 'Industry Experts', 'Academic Mentors', 'Startup Mentors') NOT NULL,
  bio           TEXT NULL,
  photo_path    VARCHAR(255) NULL,
  linkedin_url  VARCHAR(255) NULL,
  status        ENUM('draft', 'published') NOT NULL DEFAULT 'draft',
  created_by    INT UNSIGNED NULL,
  created_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uq_mentors_slug (slug),
  CONSTRAINT fk_mentors_created_by FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- Child table normalizing the mentor's repeating "expertise" tags
CREATE TABLE IF NOT EXISTS mentor_expertise (
  id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  mentor_id  INT UNSIGNED NOT NULL,
  skill      VARCHAR(100) NOT NULL,
  CONSTRAINT fk_mentor_expertise_mentor FOREIGN KEY (mentor_id) REFERENCES mentors(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ---------------------------------------------------------------------
-- 6. advisors — Mentors & Advisors (advisor track; kept distinct per spec)
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS advisors (
  id            INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name          VARCHAR(150) NOT NULL,
  slug          VARCHAR(180) NOT NULL,
  designation   VARCHAR(150) NULL,
  organization  VARCHAR(150) NULL,
  bio           TEXT NULL,
  photo_path    VARCHAR(255) NULL,
  linkedin_url  VARCHAR(255) NULL,
  status        ENUM('draft', 'published') NOT NULL DEFAULT 'draft',
  created_by    INT UNSIGNED NULL,
  created_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uq_advisors_slug (slug),
  CONSTRAINT fk_advisors_created_by FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- ---------------------------------------------------------------------
-- 7. partners — Partners & Collaborators
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS partners (
  id            INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name          VARCHAR(150) NOT NULL,
  category_id   INT UNSIGNED NULL,
  logo_path     VARCHAR(255) NULL,
  website       VARCHAR(255) NULL,
  description   VARCHAR(255) NULL,
  status        ENUM('draft', 'published') NOT NULL DEFAULT 'draft',
  created_by    INT UNSIGNED NULL,
  created_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_partners_category FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL,
  CONSTRAINT fk_partners_created_by FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- ---------------------------------------------------------------------
-- 8. events — Events & Bootcamps
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS events (
  id                INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title             VARCHAR(200) NOT NULL,
  slug              VARCHAR(220) NOT NULL,
  type              ENUM('Bootcamp', 'Workshop', 'Summit', 'Webinar', 'Challenge') NOT NULL,
  status            ENUM('Upcoming', 'Past') NOT NULL DEFAULT 'Upcoming',
  event_date_label  VARCHAR(100) NOT NULL,
  start_date        DATE NULL,
  venue             VARCHAR(200) NULL,
  description       VARCHAR(500) NULL,
  long_description  TEXT NULL,
  banner_path       VARCHAR(255) NULL,
  is_featured       TINYINT(1) NOT NULL DEFAULT 0,
  created_by        INT UNSIGNED NULL,
  created_at        DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at        DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uq_events_slug (slug),
  CONSTRAINT fk_events_created_by FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- Child table normalizing each event's repeating "speakers" list
CREATE TABLE IF NOT EXISTS event_speakers (
  id           INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  event_id     INT UNSIGNED NOT NULL,
  name         VARCHAR(150) NOT NULL,
  designation  VARCHAR(150) NULL,
  CONSTRAINT fk_event_speakers_event FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ---------------------------------------------------------------------
-- 9. blogs — Blogs & Resources
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS blogs (
  id                  INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title               VARCHAR(220) NOT NULL,
  slug                VARCHAR(240) NOT NULL,
  excerpt             VARCHAR(500) NULL,
  content             LONGTEXT NULL,
  category_id         INT UNSIGNED NULL,
  author_id           INT UNSIGNED NULL,
  cover_image_path    VARCHAR(255) NULL,
  status              ENUM('draft', 'published') NOT NULL DEFAULT 'draft',
  is_featured         TINYINT(1) NOT NULL DEFAULT 0,
  read_time_minutes   SMALLINT UNSIGNED NULL,
  published_at        DATETIME NULL,
  created_at          DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at          DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uq_blogs_slug (slug),
  KEY idx_blogs_status (status),
  CONSTRAINT fk_blogs_category FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL,
  CONSTRAINT fk_blogs_author FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- ---------------------------------------------------------------------
-- 10. contact_messages — Contact page submissions
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS contact_messages (
  id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name        VARCHAR(150) NOT NULL,
  email       VARCHAR(150) NOT NULL,
  subject     VARCHAR(200) NULL,
  message     TEXT NOT NULL,
  is_read     TINYINT(1) NOT NULL DEFAULT 0,
  created_at  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY idx_contact_messages_is_read (is_read)
) ENGINE=InnoDB;

-- ---------------------------------------------------------------------
-- 11. newsletter_subscribers
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id                INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  email             VARCHAR(150) NOT NULL,
  is_active         TINYINT(1) NOT NULL DEFAULT 1,
  subscribed_at     DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  unsubscribed_at   DATETIME NULL,
  UNIQUE KEY uq_newsletter_email (email)
) ENGINE=InnoDB;

-- ---------------------------------------------------------------------
-- 12. gallery_images
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS gallery_images (
  id            INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title         VARCHAR(200) NULL,
  image_path    VARCHAR(255) NOT NULL,
  category      VARCHAR(100) NULL,
  event_id      INT UNSIGNED NULL,
  uploaded_by   INT UNSIGNED NULL,
  created_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_gallery_event FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE SET NULL,
  CONSTRAINT fk_gallery_uploaded_by FOREIGN KEY (uploaded_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- ---------------------------------------------------------------------
-- 13. site_settings — supports the "Manage Homepage Content" admin feature.
--     One JSON blob per editable homepage section (hero, impact stats, etc.)
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS site_settings (
  id            INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  section_key   VARCHAR(100) NOT NULL,
  content       JSON NOT NULL,
  updated_by    INT UNSIGNED NULL,
  updated_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uq_site_settings_section (section_key),
  CONSTRAINT fk_site_settings_updated_by FOREIGN KEY (updated_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- ---------------------------------------------------------------------
-- 14. testimonials — Phase 5: dynamic testimonials section
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS testimonials (
  id             INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  author_name    VARCHAR(150) NOT NULL,
  author_role    VARCHAR(150) NULL,
  organization   VARCHAR(150) NULL,
  quote          TEXT NOT NULL,
  avatar_path    VARCHAR(255) NULL,
  rating         TINYINT UNSIGNED NULL,
  status         ENUM('draft', 'published') NOT NULL DEFAULT 'draft',
  is_featured    TINYINT(1) NOT NULL DEFAULT 0,
  display_order  SMALLINT UNSIGNED NOT NULL DEFAULT 0,
  created_by     INT UNSIGNED NULL,
  created_at     DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at     DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY idx_testimonials_status (status),
  CONSTRAINT fk_testimonials_created_by FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- ---------------------------------------------------------------------
-- 15. success_stories — Phase 5: dynamic success stories
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS success_stories (
  id                   INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  startup_id           INT UNSIGNED NULL,
  startup_name         VARCHAR(150) NOT NULL,
  founder_name         VARCHAR(150) NOT NULL,
  domain_category_id   INT UNSIGNED NULL,
  headline             VARCHAR(255) NOT NULL,
  slug                 VARCHAR(280) NOT NULL,
  excerpt              VARCHAR(500) NULL,
  -- Story paragraphs stored as text separated by a blank line; split on render.
  story                LONGTEXT NULL,
  cover_image_path     VARCHAR(255) NULL,
  status               ENUM('draft', 'published') NOT NULL DEFAULT 'draft',
  created_by           INT UNSIGNED NULL,
  created_at           DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at           DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uq_success_stories_slug (slug),
  KEY idx_success_stories_status (status),
  CONSTRAINT fk_success_stories_startup FOREIGN KEY (startup_id) REFERENCES startups(id) ON DELETE SET NULL,
  CONSTRAINT fk_success_stories_category FOREIGN KEY (domain_category_id) REFERENCES categories(id) ON DELETE SET NULL,
  CONSTRAINT fk_success_stories_created_by FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- Child table normalizing each success story's repeating "impact metrics" list
CREATE TABLE IF NOT EXISTS success_story_metrics (
  id                 INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  success_story_id   INT UNSIGNED NOT NULL,
  label              VARCHAR(100) NOT NULL,
  value              VARCHAR(50) NOT NULL,
  CONSTRAINT fk_success_story_metrics_story FOREIGN KEY (success_story_id) REFERENCES success_stories(id) ON DELETE CASCADE
) ENGINE=InnoDB;

SET FOREIGN_KEY_CHECKS = 1;
