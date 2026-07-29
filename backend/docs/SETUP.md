# Backend Setup Guide

## Prerequisites
- Node.js 18+
- A running MySQL 8+ server

## 1. Install dependencies
```bash
cd backend
npm install
```

## 2. Configure environment variables
```bash
cp .env.example .env
```
Edit `.env`:
- `DB_HOST` / `DB_PORT` / `DB_NAME` / `DB_USER` / `DB_PASSWORD` — your MySQL connection
- `JWT_ACCESS_SECRET` / `JWT_REFRESH_SECRET` — generate strong random values, e.g. `openssl rand -hex 64`
- `SEED_SUPER_ADMIN_EMAIL` / `SEED_SUPER_ADMIN_PASSWORD` — the first admin account (see step 4)
- `FRONTEND_URL` — the Next.js app's origin, for CORS (default `http://localhost:3000`)

## 3. Create the database schema
```bash
npm run db:migrate
```
This runs `database/schema.sql`, which creates the `tech4bharat` database and all 13 tables (12 requested + `site_settings` for homepage content management) if they don't already exist.

## 4. Seed roles, categories, and the Super Admin account
```bash
npm run db:seed
```
This inserts the 5 roles (Super Admin, Admin, Content Manager, Editor, Viewer) with their permissions, a starter set of categories, and creates the Super Admin user from your `.env` values.

**Change the seeded Super Admin password immediately after your first login** — there is no self-service password-reset flow yet; only another Super Admin/Admin can reset a user's password via `PATCH /api/users/:id/reset-password`.

## 5. Start the server
```bash
npm run dev    # nodemon, auto-restarts on file changes
# or
npm start      # plain node
```
The API listens on `http://localhost:5000/api` by default. Confirm it's up:
```bash
curl http://localhost:5000/api/health
```

## 6. Log in
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@tech4bharat.org","password":"ChangeMe@123"}'
```
Use the returned `accessToken` as `Authorization: Bearer <token>` on protected routes.

## Notes
- **File uploads** are written to `backend/uploads/<startups|mentors|advisors|partners|gallery|blogs>/` and served from `/uploads/...`. `STORAGE_DRIVER=local` is the default; `services/storage.service.js` is the single seam to swap in Cloudinary later without touching controllers.
- **No public registration** — only an existing Admin/Super Admin can create accounts via `POST /api/users`.
- This backend runs independently of the Next.js frontend in this repo. Wiring the frontend's `lib/*.ts` static data to these APIs is a separate, later integration step.
