# Backend (Express + Postgres scaffold)

## Setup
```bash
npm install
npm run dev
```

Environment variables (example for `docker-compose.yml`):
```
PORT=4000
DATABASE_URL=postgresql://app:app@localhost:5432/reservations
```

## Routes (demo)
- `GET /health` – uptime probe
- `GET /restaurants` – returns mock restaurants until the database layer is wired

## Roadmap
- Integrate Prisma migrations and real models (User, Restaurant, Table, Reservation, OpeningHours)
- Add JWT auth + refresh tokens, role-based guards
- Replace mock data with DB queries and validation
- Add Jest + Supertest integration tests
