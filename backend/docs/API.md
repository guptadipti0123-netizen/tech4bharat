# Tech4Bharat API Reference

Base URL: `http://localhost:5000/api` (configurable via `PORT` / `API_PREFIX`)

All responses use the shape:

```json
{ "success": true, "message": "...", "data": {}, "meta": { "page": 1, "limit": 20, "total": 42, "totalPages": 3 } }
```

Errors:

```json
{ "success": false, "message": "...", "errors": [{ "field": "email", "message": "A valid email is required." }] }
```

🔒 = requires `Authorization: Bearer <accessToken>` and the listed permission (`resource:action`, or the role has `resource:manage` / `*`).

---

## Auth (`/auth`)
| Method | Path | Auth | Description |
|---|---|---|---|
| POST | `/auth/login` | Public | Email + password login. Sets an httpOnly refresh-token cookie, returns `{ user, accessToken }`. |
| POST | `/auth/refresh` | Public (cookie) | Issues a new access token from the refresh cookie. |
| POST | `/auth/logout` | Public | Clears the refresh-token cookie. |
| GET | `/auth/me` | 🔒 any logged-in user | Returns the current decoded identity. |

No public registration endpoint exists by design — accounts are created by an Admin/Super Admin via `/users`.

## Users (`/users`) — all routes 🔒
| Method | Path | Permission |
|---|---|---|
| GET | `/users` | `users:read` |
| GET | `/users/:id` | `users:read` |
| POST | `/users` | `users:create` |
| PUT | `/users/:id` | `users:update` |
| PATCH | `/users/:id/reset-password` | `users:update` |
| DELETE | `/users/:id` | `users:delete` |

## Roles (`/roles`) — 🔒
| Method | Path | Permission |
|---|---|---|
| GET | `/roles` | `roles:read` |

## Categories (`/categories`)
| Method | Path | Auth | Notes |
|---|---|---|---|
| GET | `/categories?type=` | Public | `type` ∈ `startup_domain, blog_category, partner_category, focus_area` |
| POST | `/categories` | 🔒 `categories:create` | |
| DELETE | `/categories/:id` | 🔒 `categories:delete` | |

## Startups (`/startups`)
| Method | Path | Auth | Notes |
|---|---|---|---|
| GET | `/startups?status=&category=&stage=&featured=&search=&page=&limit=` | Public | |
| GET | `/startups/slug/:slug` | Public | |
| GET | `/startups/:id` | Public | |
| POST | `/startups` | 🔒 `startups:create` | multipart/form-data, field `logo` |
| PUT | `/startups/:id` | 🔒 `startups:update` | multipart/form-data, field `logo` |
| DELETE | `/startups/:id` | 🔒 `startups:delete` | |

## Mentors (`/mentors`)
Same shape as Startups. Upload field: `photo`. Body may include `expertise` (JSON array, e.g. `["Product Strategy","Fundraising"]`).

## Advisors (`/advisors`)
Same shape as Mentors, without `expertise`/`category`. Upload field: `photo`.

## Partners (`/partners`)
Same CRUD shape (no slug/detail-by-slug route). Upload field: `logo`.

## Events (`/events`)
Same shape as Startups. Upload field: `banner`. Body may include `speakers` (JSON array of `{ name, designation }`).

## Blogs (`/blogs`)
Same shape as Startups. Upload field: `coverImage`.

## Gallery (`/gallery`)
| Method | Path | Auth |
|---|---|---|
| GET | `/gallery?category=&eventId=` | Public |
| GET | `/gallery/:id` | Public |
| POST | `/gallery` | 🔒 `gallery:create` — multipart, field `image` |
| PUT | `/gallery/:id` | 🔒 `gallery:update` |
| DELETE | `/gallery/:id` | 🔒 `gallery:delete` |

## Contact Messages (`/contact-messages`)
| Method | Path | Auth |
|---|---|---|
| POST | `/contact-messages` | Public — Contact page form |
| GET | `/contact-messages?isRead=` | 🔒 `contact:read` |
| GET | `/contact-messages/:id` | 🔒 `contact:read` |
| PATCH | `/contact-messages/:id/read` | 🔒 `contact:update` |
| DELETE | `/contact-messages/:id` | 🔒 `contact:delete` |

## Newsletter (`/newsletter`)
| Method | Path | Auth |
|---|---|---|
| POST | `/newsletter/subscribe` | Public |
| POST | `/newsletter/unsubscribe` | Public |
| GET | `/newsletter?isActive=` | 🔒 `newsletter:read` |
| DELETE | `/newsletter/:id` | 🔒 `newsletter:delete` |

## Dashboard (`/dashboard`) — 🔒
| Method | Path | Permission |
|---|---|---|
| GET | `/dashboard/stats` | `dashboard:view` — counts for every resource + 10 most recent activity items |

## Site Settings / Homepage Content (`/site-settings`)
| Method | Path | Auth |
|---|---|---|
| GET | `/site-settings` | Public — all sections |
| GET | `/site-settings/:sectionKey` | Public — one section, e.g. `hero`, `impact-stats` |
| PUT | `/site-settings/:sectionKey` | 🔒 `settings:update` — body `{ "content": {...} }` |

## Uploaded files
Served statically from `/uploads/<subfolder>/<filename>` (e.g. `http://localhost:5000/uploads/startups/<uuid>.png`). Every list/detail response includes the resolved absolute URL (e.g. `logo_url`, `photo_url`, `banner_url`, `cover_image_url`, `image_url`).

## Health check
`GET /api/health` → `{ success: true, message: "Tech4Bharat API is running." }`
