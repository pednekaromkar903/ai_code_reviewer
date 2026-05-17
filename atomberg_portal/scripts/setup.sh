#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/.."

echo "==> Checking Docker..."
if ! docker info >/dev/null 2>&1; then
  echo "Docker is not running. Opening Docker Desktop..."
  open -a Docker 2>/dev/null || true
  echo "Wait for Docker to start, then run this script again."
  exit 1
fi

echo "==> Starting PostgreSQL..."
docker compose up -d postgres

echo "==> Waiting for database..."
for i in {1..30}; do
  if docker exec atomberg-db pg_isready -U postgres >/dev/null 2>&1; then
    break
  fi
  sleep 1
done

echo "==> Applying schema..."
npm run db:generate
npm run db:push

echo "==> Seeding demo data..."
npm run db:seed

echo ""
echo "Done! Start the app with: npm run dev"
echo "Login: admin@atomberg.com / password123"
