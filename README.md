# Atomberg Goal Portal — AI-Powered Performance Management
Built for AtomQuest Hackathon 2026

## Architecture
- Frontend: Next.js 14 (App Router) + TypeScript + Tailwind + shadcn/ui
- Backend: Express + TypeScript
- Database: PostgreSQL + Prisma
- Cache: Redis

For a complete architectural overview and Mermaid diagrams (showing our Next.js -> Express -> Prisma -> Postgres stack, Ollama integration, and Email Intelligence Pipeline), please refer to the [ARCHITECTURE.md](./ARCHITECTURE.md) file.

## Setup
1. docker-compose up -d
2. npm install
3. npm run db:push
4. npm run db:seed
5. npm run dev

## Demo Credentials
- admin@atomberg.com / password123 (ADMIN)
- manager1@atomberg.com / password123 (MANAGER)
- employee1@atomberg.com / password123 (EMPLOYEE)

## Deployment (Vercel)
To deploy the Next.js frontend to Vercel:
1. Ensure the `NEXT_PUBLIC_API_URL` environment variable is set to your production Express backend URL in Vercel project settings.
2. The monorepo setup dictates setting the root directory to `apps/web`.
3. The build command is natively picked up by Vercel (`npm run build`).

