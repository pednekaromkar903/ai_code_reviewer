# Atomberg Goal Portal — Architecture

This document describes the high-level architecture of the Atomberg Goal Portal.

## Architecture Diagram

```mermaid
graph TD
    %% Frontend Layer
    subgraph Frontend ["Next.js 14 Frontend"]
        UI[React Components / UI]
        NextAPI[Next.js API Routes / Proxy]
    end

    %% Backend Layer
    subgraph Backend ["Express Backend"]
        Express[Express.js REST API]
        AuthMiddleware[JWT Auth Middleware]
        EmailPipeline[Email Intelligence Pipeline]
        Classifier[Email Classifier]
    end

    %% Database & Data Layer
    subgraph DataLayer ["Data Layer"]
        Prisma[Prisma ORM]
        Postgres[(PostgreSQL)]
        Redis[(Redis Cache)]
    end

    %% External Services
    subgraph External ["External Services"]
        Ollama((Ollama AI Service - Optional/Fallback))
        GmailOAuth((Gmail OAuth API))
    end

    %% Connections
    UI -->|HTTP Requests| NextAPI
    NextAPI -->|API Calls| AuthMiddleware
    AuthMiddleware --> Express
    
    %% Database connections
    Express --> Prisma
    Prisma --> Postgres
    Express -.->|Cache| Redis
    
    %% Email Pipeline
    GmailOAuth -->|Fetch Emails| EmailPipeline
    EmailPipeline --> Classifier
    Classifier --> Prisma
    Express -->|Read Emails| EmailPipeline
    UI -->|Dashboard Data| Express
    
    %% AI Connection
    NextAPI -.->|Proxy| Ollama
    Express -.->|Fallback Analytics| Ollama
```

## System Components

- **Frontend:** Built with Next.js 14 (App Router), React, and Tailwind CSS.
- **Backend:** Express.js REST API with Prisma ORM.
- **Database:** PostgreSQL container for robust relational data storage.
- **AI Integration:** Local inference powered by Ollama (gemma3 model) gracefully degrading to backend mock endpoints.
- **Email Intelligence:** Pipeline consuming Gmail OAuth, passing content through a classifier, storing structured data in DB, and served to the Dashboard.