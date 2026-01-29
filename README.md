# Fullstack Template

Monorepo template with a Next.js web app and Hono API, managed with [Turborepo](https://turbo.build/) and [Bun](https://bun.sh/).

## Prerequisites

- [Bun](https://bun.sh/) (v1.3.5 or compatible)

## Installation

```bash
bun install
```

## Commands

All commands are run from the **project root** with Bun.

### Development

```bash
# Run all apps in development mode (api + web)
bun run dev
```

### Build & Start

```bash
# Build all apps
bun run build

# Start all apps (after build)
bun run start
```

### API – Database

```bash
# Generate Drizzle migrations
bun run api:db:generate

# Run database migrations
bun run api:db:migrate

# Install dependencies for the API app only
bun run api:install
```

### API – RPC

```bash
# Rebuild API (e.g. to update RPC types for the web app, you might need to reopen you IDE)
bun run api:update-rpc
```

### Run a single app

```bash
# API only
bun run --filter @grammar/api dev

# Web only
bun run --filter @grammar/web dev
```

### API app (from `apps/api`)

```bash
cd apps/api
bun run dev          # Development with hot reload
bun run build        # Build for production
bun run start        # Start production server
bun run test         # Run tests (watch)
bun run test:run     # Run tests once
bun run test:coverage # Run tests with coverage
bun run db:generate  # Generate migrations
bun run db:migrate   # Run migrations
```

### Web app (from `apps/web`)

```bash
cd apps/web
bun run dev    # Next.js dev server
bun run build  # Next.js production build
bun run start  # Next.js production server
bun run lint   # ESLint
```

## Project structure

```
├── apps/
│   ├── api/     # Hono API (Drizzle, Better Auth)
│   └── web/     # Next.js app
├── package.json
└── turbo.json
```

## Environment

Copy the example env files and fill in your values:

- `apps/api/.env.example` → `apps/api/.env`
- `apps/web/.env.example` → `apps/web/.env`
