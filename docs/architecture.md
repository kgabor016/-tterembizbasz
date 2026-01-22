# Architecture and delivery plan

## Overview
A three-part system for restaurant discovery and table reservations:
- **Backend:** Node.js/Express REST API + PostgreSQL (via Prisma or another ORM)
- **Mobile app:** React Native (Expo) client for customers
- **Admin web:** React (Next.js) interface for CRUD and reporting

## Domain model (initial)
- **User** (roles: user, admin)
- **Restaurant** (name, cuisine, location/contact, description)
- **Table** (seats, label, restaurantId)
- **Reservation** (userId, tableId, start, end, status, partySize)
- **OpeningHours** (restaurantId, weekday, open, close)
- Optional: **Menu**, **Review**

## API surface (MVP)
- `POST /auth/register`, `POST /auth/login`, `POST /auth/refresh`
- `GET /restaurants` (list + filters), `GET /restaurants/:id`
- `GET /restaurants/:id/tables`
- `POST /reservations`, `GET /reservations` (own), `PATCH /reservations/:id`, `DELETE /reservations/:id`
- Admin-only: CRUD for restaurants, tables, opening hours, and all reservations

## Local development
- Use `docker-compose.yml` to start PostgreSQL + Adminer
- Backend runs on `localhost:4000`; configure `DATABASE_URL` in `backend/.env`
- Prefer Prisma migrations for schema evolution and seed scripts for demo data

## Testing and quality
- Jest + Supertest for API integration
- ESLint/Prettier and TypeScript for both backend and frontends
- Husky + lint-staged for pre-commit checks; GitHub Actions for CI (lint + test)

## Delivery checklist
- [ ] ER diagram committed to `docs/` and kept in sync with Prisma schema
- [ ] Database dump for seed/demo data
- [ ] OpenAPI/Swagger generated from backend routes
- [ ] React Native app with auth, search/filter, reservation flow, and booking history
- [ ] Admin web with auth, CRUD, and schedule management
- [ ] README with install/run steps; short HU/EN pitch for the demo
