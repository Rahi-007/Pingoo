# Pingoo - Hybrid Messaging App

## Overview
Pingoo is a comprehensive messaging application that combines the best features from WhatsApp, Telegram, and Facebook Messenger. This project is designed as a portfolio piece showcasing modern full-stack development with real-time capabilities, security features, and scalable architecture.

**Note**: "Pingoo" combines "Ping" (message notification) with a friendly, modern suffix for a unique brand identity.

## Features by Platform

### WhatsApp Features
- ✅ End-to-end encryption for private chats
- ✅ Status updates (24-hour disappearing stories)
- ✅ Group chats with admin controls
- ✅ Media sharing (images, videos, documents)
- ✅ Voice messages with waveform
- ✅ Read receipts and typing indicators
- ✅ Contact synchronization

### Telegram Features
- ✅ Channels and broadcast messages
- ✅ Bots and automation platform
- ✅ Secret chats with self-destruct timer
- ✅ Large file sharing (up to 2GB)
- ✅ Username-based contacts (no phone required)
- ✅ Edit/delete messages for everyone
- ✅ Message pinning

### Messenger Features
- ✅ Reactions to messages (like, love, laugh, etc.)
- ✅ Stories with filters and effects
- ✅ Video/voice calls with WebRTC
- ✅ Chat colors and themes
- ✅ Polls in chats
- ✅ Games and mini-apps integration

## System Architecture

### Tech Stack Specification
- **Frontend**: Next.js 14+ with TypeScript, Tailwind CSS, App Router
- **Backend**: NestJS with TypeScript, MikroORM, Socket.io
- **Database**: PostgreSQL 14+ with JSONB support
- **ORM**: MikroORM (instead of Prisma) with migrations and seeding
- **Real-time**: Socket.io for WebSocket connections
- **Authentication**: JWT with refresh tokens, Two-factor authentication
- **File Storage**: Cloudinary/AWS S3 for media files
- **Caching**: Redis for session management
- **Containerization**: Docker with Docker Compose

### High-Level Architecture (Next.js + NestJS)
```
┌─────────────────────────────────────────────────────────────┐
│                    Next.js Frontend (App Router)            │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │   Chat   │  │  Status  │  │  Calls   │  │  Groups  │    │
│  │  Pages   │  │  Pages   │  │  Pages   │  │  Pages   │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    NestJS Backend API                        │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │   Auth   │  │   Chat   │  │  Media   │  │  Real-   │    │
│  │  Module  │  │  Module  │  │  Module  │  │  time    │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                     Data Layer (MikroORM)                    │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                   │
│  │PostgreSQL│  │  Redis   │  │  S3/     │                   │
│  │  (Main)  │  │ (Cache)  │  │Cloudinary│                   │
│  └──────────┘  └──────────┘  └──────────┘                   │
└─────────────────────────────────────────────────────────────┘
```

## Database Design

### Core Entities
1. **User** - User profiles with multi-method authentication
2. **Chat** - Private, group, and channel conversations
3. **Message** - Messages with various types and features
4. **Contact** - User contact relationships
5. **Status** - 24-hour disappearing stories
6. **Call** - Voice/video call records
7. **Group** - Group chat metadata
8. **Channel** - Broadcast channel information

### Key Relationships
- One User can have many Contacts
- One Chat can have many Messages
- One Message can have many Reactions
- One User can create many Status updates
- Groups and Channels are specialized Chat types

## API Design

### RESTful Endpoints
- **Authentication**: `/auth/*` - Registration, login, token refresh
- **Users**: `/users/*` - Profile management, search, blocking
- **Chats**: `/chats/*` - Chat creation, listing, management
- **Messages**: `/chats/{id}/messages` - Message operations
- **Groups**: `/groups/*` - Group management
- **Channels**: `/channels/*` - Channel operations
- **Status**: `/status/*` - Stories management
- **Calls**: `/calls/*` - Call initiation and management
- **Media**: `/media/*` - File upload/download

### WebSocket Events
- Real-time message delivery
- Typing indicators
- Online status updates
- Call signaling
- Notification pushes

## Security Features

### Authentication & Authorization
- JWT-based authentication with refresh tokens
- Two-factor authentication support
- Role-based access control (RBAC)
- Session management with Redis

### Data Protection
- End-to-end encryption for private chats (Signal Protocol)
- Password hashing with bcrypt
- HTTPS enforcement
- Input validation and sanitization

### Privacy Controls
- Granular privacy settings (last seen, profile photo, status)
- Block/unblock users
- Report abuse system
- Data export functionality

## Scalability Considerations

### Horizontal Scaling
- Stateless microservices architecture
- Database sharding by user region
- Load balancing with NGINX
- CDN for static assets and media

### Performance Optimization
- Redis caching for frequently accessed data
- Database query optimization with indexes
- Connection pooling
- Message queue for background jobs

### Monitoring & Observability
- Application performance monitoring (APM)
- Centralized logging with ELK stack
- Real-time metrics with Prometheus/Grafana
- Error tracking with Sentry

## Deployment Strategy

### Development
- Docker Compose for local development
- Hot reload for both frontend and backend
- Automated testing on Git push

### Staging
- Kubernetes cluster for staging environment
- Automated deployment from main branch
- Load testing and performance validation

### Production
- Blue-green deployment strategy
- Canary releases for new features
- Automated rollback on failure
- Zero-downtime updates

## Project Structure (Next.js + NestJS + MikroORM)

```
connectify/
├── frontend/                 # Next.js 14+ Application
│   ├── src/
│   │   ├── app/             # App Router (pages, layouts, loading)
│   │   │   ├── (auth)/      # Authentication routes
│   │   │   ├── chat/        # Chat pages
│   │   │   ├── status/      # Status/stories pages
│   │   │   └── calls/       # Call pages
│   │   ├── components/      # Reusable UI components
│   │   │   ├── ui/          # Shadcn/ui components
│   │   │   ├── chat/        # Chat-specific components
│   │   │   └── common/      # Common components
│   │   ├── lib/             # Utilities, API clients
│   │   │   ├── api/         # API service calls
│   │   │   ├── socket/      # WebSocket client
│   │   │   └── utils/       # Utility functions
│   │   ├── store/           # State management (Zustand)
│   │   ├── hooks/           # Custom React hooks
│   │   └── styles/          # Tailwind CSS, global styles
│   ├── public/              # Static assets
│   └── next.config.js       # Next.js configuration
├── backend/                  # NestJS Application
│   ├── src/
│   │   ├── modules/         # Feature modules (NestJS structure)
│   │   │   ├── auth/        # Authentication module
│   │   │   │   ├── auth.controller.ts
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── auth.module.ts
│   │   │   │   └── entities/
│   │   │   ├── users/       # Users module
│   │   │   ├── chats/       # Chats module
│   │   │   ├── messages/    # Messages module
│   │   │   ├── media/       # Media module
│   │   │   └── calls/       # Calls module
│   │   ├── entities/        # MikroORM entity definitions
│   │   │   ├── user.entity.ts
│   │   │   ├── chat.entity.ts
│   │   │   ├── message.entity.ts
│   │   │   └── ...
│   │   ├── migrations/      # Database migrations
│   │   ├── seeders/         # Data seeders (MikroORM seeder)
│   │   ├── common/          # Shared utilities, guards, filters
│   │   └── main.ts          # Application entry point
│   ├── test/                # E2E and unit tests
│   ├── mikro-orm.config.ts  # MikroORM configuration
│   └── package.json         # Backend dependencies
├── shared/                  # Shared code between frontend/backend
│   ├── types/              # TypeScript type definitions
│   ├── constants/          # Shared constants
│   └── utils/              # Shared utilities
├── docker/                  # Docker configurations
│   ├── docker-compose.yml  # PostgreSQL, Redis, Backend, Frontend
│   ├── backend.Dockerfile
│   └── frontend.Dockerfile
└── docs/                   # Documentation
    ├── architecture.md
    ├── api-endpoints.md
    ├── database-diagram.md
    ├── core-features.md
    └── tech-stack-guide.md  # Your specific stack guide
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- PostgreSQL 14+
- Redis 6+
- Docker and Docker Compose

### Development Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
4. Start development services:
   ```bash
   docker-compose up -d
   npm run dev:backend
   npm run dev:frontend
   ```

### Database Setup
1. Create database:
   ```bash
   npx mikro-orm migration:up
   ```
2. Seed initial data:
   ```bash
   npm run db:seed
   ```

## Testing

### Test Types
- **Unit Tests**: Jest for business logic
- **Integration Tests**: API endpoint testing
- **E2E Tests**: Cypress for user workflows
- **Performance Tests**: Load testing with k6

### Running Tests
```bash
# Backend tests
npm test:backend

# Frontend tests
npm test:frontend

# E2E tests
npm test:e2e
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes with descriptive messages
4. Push to the branch
5. Create a Pull Request

## License
This project is for portfolio demonstration purposes.

## Future Enhancements

### Short-term (Next 3 months)
- [ ] Payment integration for premium features
- [ ] Marketplace for bots and stickers
- [ ] Advanced search with filters
- [ ] Custom emoji and sticker creation

### Medium-term (Next 6 months)
- [ ] AI-powered chat suggestions
- [ ] Video conferencing with screen sharing
- [ ] Collaborative document editing
- [ ] Calendar integration

### Long-term (Next 12 months)
- [ ] Blockchain-based message verification
- [ ] AR filters for video calls
- [ ] Cross-platform desktop apps
- [ ] Enterprise version with admin controls

## Contact
For questions or feedback about this portfolio project, please refer to the documentation or create an issue in the repository.

---
**Note**: This is a portfolio project demonstrating system design and architecture skills. Not all features may be fully implemented in the initial version.