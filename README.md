# 🚀 NestJS Authorization Service

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)

A robust authorization service built with NestJS, featuring user management, JWT authorization, and subscription modes.

## ✨ Features

- 🔐 Secure JWT authorization
- 👥 User Management System
- 💫 Subscription Modes (Lite/Standard)
- 🗄️ PostgreSQL Database Integration
- 🚦 Redis Cache Implementation
- ✅ Input Validation
- 🔄 Auto-transform DTOs

## 🛠️ Tech Stack

- NestJS - Progressive Node.js framework
- TypeScript - Type safety and modern JavaScript features
- PostgreSQL - Primary database
- Redis - Caching layer
- TypeORM - Object Relational Mapper
- Class Validator - Input validation
- JWT - Authentication tokens

## 🚀 Quick Start

### Prerequisites
- `bash`

- `node >= 22.13.1`

- `pnpm >= 10.3.0`

- `postgresql >= 12`

- `redis >= 6`

### Installation

1. Clone the repository
2. install dependencies:
```bash
pnpm install
```
3. create .env file and set environment variables:

| Variable          | Description                                     |
|-------------------|-------------------------------------------------|
| APP_PORT          | Port number for the application (default: 3001) |
| POSTGRES_USER     | PostgreSQL database username                    |
| POSTGRES_PASSWORD | PostgreSQL database password                    |
| POSTGRES_DB       | PostgreSQL database name                        |
| POSTGRES_PORT     | PostgreSQL server port (default: 5432)          |
| POSTGRES_HOST     | PostgreSQL server host address                  |
| REDIS_PASSWORD    | Redis server password                           |
| REDIS_PORT        | Redis server port (default: 6379)               |
| JWT_SECRET        | Secret key for JWT token generation             |

4. docker containers up
```bash
 docker compose up -d
```
5. run app
```bash
pnpm run start:dev
```
## 🏗️ Project Structure

```
├── src
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── auth
│   │   ├── auth.module.ts
│   │   ├── auth.service.ts
│   │   ├── controllers
│   │   │   ├── auth.controller.ts
│   │   │   └── index.ts
│   │   ├── dto
│   │   │   ├── index.ts
│   │   │   └── sign.dto.ts
│   │   ├── entity
│   │   │   ├── index.ts
│   │   │   └── user.entity.ts
│   │   ├── guards
│   │   │   ├── index.ts
│   │   │   └── jwt-auth.guard.ts
│   │   ├── index.ts
│   │   └── jwt.strategy.ts
│   ├── infra
│   │   ├── db
│   │   │   ├── index.ts
│   │   │   ├── migrations
│   │   │   └── typeorm.config.ts
│   │   ├── index.ts
│   │   └── redis
│   │       ├── index.ts
│   │       ├── redis.module.ts
│   │       └── redis.service.ts
│   └── main.ts
```

## 💡 User Entity Schema

| Field     | Type     | Description                    |
|-----------|----------|--------------------------------|
| id        | UUID     | Primary Key                    |
| name      | string   | User's name (2-30 chars)       |
| email     | string   | Unique email address           |
| password  | string   | Hashed password (8-72 chars)   |
| mode      | enum     | Subscription type (lite/standard) |
| spent     | decimal  | Amount spent by user           |
| dayFrom   | Date     | Subscription start date        |
| dayTo     | Date     | Subscription end date          |

## 🔒 Security Features

- Password hashing
- JWT token authorization
- Input validation and sanitization
- Rate limiting (Redis-based)
- Whitelist validation
- Request transformation


## 🎯 Roadmap for future

- [ ] Add OAuth2 integration
- [ ] Implement refresh tokens
- [ ] Add role-based access control
- [ ] Add email verification
- [ ] Implement password reset functionality

---

<div align="center">
Made with ❤️ and ☕
</div>
