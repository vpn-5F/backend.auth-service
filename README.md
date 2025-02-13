# 🚀 NestJS Authentication Service

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)

A robust authentication service built with NestJS, featuring user management, JWT authentication, and subscription modes.

## ✨ Features

- 🔐 Secure JWT Authentication
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

## 🏗️ Project Structure

```
src/
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
│   │   │   │   └── 1739418372674-CreateUsersTable.ts
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
- JWT token authentication
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