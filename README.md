# Restaurant Reservation Platform (React Native + REST backend)

This repository contains a monorepo-friendly layout for a restaurant discovery and table booking platform. The goal is to provide:

- A RESTful backend with SQL storage
- A React Native client for end-users
- A web-based admin interface
- Documentation, ERD, and testing guidance

## Repository layout

- `backend/` – Express-based REST API scaffold with example routes and Postgres docker config
- `docs/` – Architecture overview, feature scope, and delivery checklist
- `docker-compose.yml` – Local Postgres + Adminer for database development

## Quickstart (backend)

```bash
cd backend
npm install
npm run dev
```

The sample server starts on `http://localhost:4000` and exposes `GET /health` and `GET /restaurants` with mock data. Update `DATABASE_URL` in `.env` (see `docker-compose.yml` for defaults) before wiring up Prisma/ORM models.

## Next steps

- Flesh out Prisma schema and migrations for Users, Restaurants, Tables, Reservations
- Secure routes with JWT auth and role-based access (user vs admin)
- Build React Native (Expo) app for search/filter/reservations
- Build admin web app for CRUD, schedule management, and reporting
- Add CI (lint/test) and comprehensive tests
