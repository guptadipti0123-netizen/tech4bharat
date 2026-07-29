require("dotenv").config();

const required = ["DB_HOST", "DB_NAME", "DB_USER", "JWT_ACCESS_SECRET", "JWT_REFRESH_SECRET"];

const missing = required.filter((key) => !process.env[key]);
if (missing.length > 0 && process.env.NODE_ENV !== "test") {
  // Fail fast — a misconfigured backend should never boot silently.
  // eslint-disable-next-line no-console
  console.error(`[env] Missing required environment variables: ${missing.join(", ")}`);
  console.error("[env] Copy .env.example to .env and fill in real values before starting the server.");
  process.exit(1);
}

const config = {
  env: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT) || 5000,
  apiPrefix: process.env.API_PREFIX || "/api",
  frontendUrl: process.env.FRONTEND_URL || "http://localhost:3000",

  db: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD || "",
    connectionLimit: Number(process.env.DB_CONNECTION_LIMIT) || 10,
  },

  jwt: {
    accessSecret: process.env.JWT_ACCESS_SECRET,
    accessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN || "15m",
    refreshSecret: process.env.JWT_REFRESH_SECRET,
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || "7d",
    refreshCookieName: process.env.REFRESH_COOKIE_NAME || "t4b_refresh_token",
  },

  bcryptSaltRounds: Number(process.env.BCRYPT_SALT_ROUNDS) || 12,

  seedSuperAdmin: {
    name: process.env.SEED_SUPER_ADMIN_NAME || "Super Admin",
    email: process.env.SEED_SUPER_ADMIN_EMAIL,
    password: process.env.SEED_SUPER_ADMIN_PASSWORD,
  },

  upload: {
    maxFileSizeMb: Number(process.env.UPLOAD_MAX_FILE_SIZE_MB) || 5,
    baseDir: process.env.UPLOAD_BASE_DIR || "uploads",
    baseUrl: process.env.UPLOAD_BASE_URL || "http://localhost:5000/uploads",
    driver: process.env.STORAGE_DRIVER || "local",
  },

  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME || "",
    apiKey: process.env.CLOUDINARY_API_KEY || "",
    apiSecret: process.env.CLOUDINARY_API_SECRET || "",
  },

  rateLimit: {
    windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
    maxRequests: Number(process.env.RATE_LIMIT_MAX_REQUESTS) || 300,
    authMaxRequests: Number(process.env.AUTH_RATE_LIMIT_MAX_REQUESTS) || 10,
  },
};

module.exports = config;
