# 🎯 Atomberg Goal Portal — AI-Powered Performance Management

**Built for AtomQuest Hackathon 2026**

An enterprise-grade Goal Setting & Tracking Portal with AI-powered natural language analytics, designed for Atomberg Technologies' vertically integrated manufacturing and multi-channel sales operations.

## 🏗️ Architecture

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   Next.js 14    │────▶│  Express + TS    │────▶│  PostgreSQL 15  │
│   (Frontend)    │     │  (Backend)       │     │  (Database)     │
└─────────────────┘     └──────────────────┘     └─────────────────┘
        │                        │
        ▼                        ▼
┌─────────────────┐     ┌──────────────────┐
│  AI Chat Widget │     │  Redis (Cache)   │
│  (NL → SQL)     │     │  (Sessions)      │
└─────────────────┘     └──────────────────┘
```

## ⚡ Quick Start

```bash
# 1. Start infrastructure
docker-compose up -d

# 2. Install dependencies
npm install
cd apps/api && npm install && cd ../..
cd apps/web && npm install && cd ../..

# 3. Setup database
npm run db:push
npm run db:seed

# 4. Start development
npm run dev
```

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Prisma Studio**: http://localhost:5555

## 🔑 Demo Credentials

| Role | Email | Password |
|------|-------|----------|
| **Admin** | admin@atomberg.com | password123 |
| **Manager (Manufacturing)** | manager1@atomberg.com | password123 |
| **Manager (B2B Sales)** | manager2@atomberg.com | password123 |
| **Employee (R&D)** | employee1@atomberg.com | password123 |
| **Employee (Manufacturing)** | employee2@atomberg.com | password123 |
| **Employee (B2B)** | employee3@atomberg.com | password123 |

## ✨ Key Features

### Phase 1 — Goal Creation & Approval
- ✅ Employee goal sheet creation with Thrust Area selection
- ✅ UoM Types: MIN (higher=better), MAX (lower=better), TIMELINE, ZERO
- ✅ System-enforced validation: Total weightage = 100%, Min 10% per goal, Max 8 goals
- ✅ Manager inline approval workflow with edit capability
- ✅ Goal locking on approval + Admin unlock with audit trail
- ✅ Shared departmental KPIs (Admin pushes, employees adjust weightage only)

### Phase 2 — Achievement Tracking & Check-ins
- ✅ Quarterly update interface (Q1: July, Q2: Oct, Q3: Jan, Q4: Mar/Apr)
- ✅ Status tracking: Not Started / On Track / Completed
- ✅ Auto-computed progress scores based on UoM formulas
- ✅ Manager check-in module with structured comments

### 🤖 AI Chatbot — "Atomberg Intelligence"
- ✅ Natural language queries: *"Why is manufacturing behind target?"*
- ✅ Cross-department bottleneck detection
- ✅ Real-time completion analytics
- ✅ Smart contextual suggestions based on role and pending actions
- ✅ Validation assistant: *"Can I set weights 20,20,15,15,15,15?"*

### Reporting & Governance
- ✅ Achievement Report export (CSV)
- ✅ Completion Dashboard (real-time)
- ✅ Immutable Audit Trail (IPO-ready)
- ✅ Escalation tracking

## 🎨 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, Zustand, Recharts |
| Backend | Node.js, Express, TypeScript, Prisma ORM |
| Database | PostgreSQL 15 |
| Cache | Redis 7 |
| AI | Intent-based NL → SQL (Extensible to Gemini/OpenAI) |

## 🤖 Atomberg Intelligence Platform

Analytics layer on top of legacy enterprise data (manufacturing, sales, HR):

| Page | URL | Description |
|------|-----|-------------|
| DB Connect | `/connect` | Test & save read-only database connections |
| Intelligence Chat | `/chat` | NL → safe SQL with charts & tables |
| Schema Explorer | `/schema` | Auto-discovered table map |
| HR Goals | `/intelligence/goals` | Performance goals from legacy HR tables |

**Legacy tables seeded:** `manufacturing_daily`, `sales_monthly`, `legacy_employees`, `legacy_goals`

**Example queries:**
- *"What's today's rejection rate from line 3?"*
- *"Compare B2B vs D2C revenue this quarter"*
- *"Which vendors are behind on L1 targets?"*

## 📁 Project Structure

```
atomberg-portal/
├── apps/
│   ├── api/           # Express backend (goals, AI, intelligence, audit)
│   └── web/           # Next.js frontend
├── packages/
│   └── database/      # Prisma schema + seed
├── docker-compose.yml
└── README.md
```

## 🏆 Hackathon Evaluation Alignment

| Criteria | Implementation |
|----------|---------------|
| **Functionality** | End-to-end flow: Employee → Manager → Admin + AI Chatbot |
| **Adherence to BRD** | All Phase 1 & 2 requirements with exact validation rules |
| **User Friendliness** | Enterprise-grade UI, real-time validation, contextual AI help |
| **Technical Robustness** | TypeScript, RBAC, SQL injection prevention, error boundaries |
| **Good-to-Have** | AI Analytics, Smart Suggestions, Escalation Module, Audit Trail |
| **Cost Optimization** | Redis caching, Prisma connection pooling, Next.js static optimization |

---

**Built with ❤️ for Atomberg Technologies**
