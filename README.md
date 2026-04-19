# Pingoo - Hybrid Messaging App

Pingoo is a modern, full-stack hybrid messaging application built with Next.js (frontend) and NestJS (backend). This project is designed to be scalable, maintainable, and follows best practices for modern web development.

## 🚀 Tech Stack

### Frontend
- **Next.js 16** with TypeScript and Turbopack
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **Redux Toolkit** for state management
- **Motion** for animations
- **Axios** for HTTP requests

### Backend
- **NestJS** with TypeScript
- **PostgreSQL** with **MikroORM**
- **JWT Authentication** with refresh tokens
- **Swagger** for API documentation
- **Class-validator** for validation
- **Cloudinary** for media storage

### Development Tools
- **Prettier** for code formatting
- **ESLint** for linting
- **Concurrently** for running multiple services

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **PostgreSQL** (or use Neon cloud database)
- **Git**

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Rahi-007/Pingoo.git
cd Pingoo
```

### 2. Install Dependencies

Run the following command to install all dependencies (root, frontend, and backend):

```bash
npm run install:all
```

Alternatively, you can install them separately:

```bash
# Install root dependencies
npm install

# Install frontend dependencies
npm install --prefix apps/frontend

# Install backend dependencies  
npm install --prefix apps/backend
```

### 3. Environment Configuration

Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

Edit the `.env` file with your configuration:

```env
# Frontend Environment Variables
NODE_ENV=development
NEXT_PUBLIC_BACKEND_API_URL=http://localhost:8080

# Server (Backend)
PORT=8080
CORS_ORIGIN=http://localhost:3000

# Database Configuration (choose one option)

# Option 1: Neon PostgreSQL (cloud)
DATABASE_URL=postgresql://username:password@host/database?sslmode=require

# Option 2: Local PostgreSQL
DB_NAME=pingoo
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRES_IN=1d
JWT_REFRESH_SECRET=your_refresh_secret_key_here
JWT_REFRESH_EXPIRES_IN=7d
```

### 4. Database Setup

#### Option A: Using Local PostgreSQL
1. Install PostgreSQL on your machine
2. Create a database named `pingoo` (or whatever you configured in `.env`)
3. Run database migrations and seed data:

```bash
npm run sync:db
```

#### Option B: Using Neon (Cloud PostgreSQL)
1. Create a free account at [Neon.tech](https://neon.tech)
2. Create a new project and get your connection string
3. Update the `DATABASE_URL` in your `.env` file
4. Run the seed command:

```bash
npm run sync:db
```

### 5. Start the Development Servers

Run both frontend and backend simultaneously:

```bash
npm run dev
```

This will start:
- **Frontend** at `http://localhost:3000`
- **Backend** at `http://localhost:8080`

You can also run them separately:

```bash
# Frontend only
npm run dev --prefix apps/frontend

# Backend only
npm run start:dev --prefix apps/backend
```

## 📁 Project Structure

```
pingoo/
├── apps/
│   ├── frontend/          # Next.js frontend application
│   │   ├── src/
│   │   │   ├── app/       # Next.js app router pages
│   │   │   ├── components/# React components
│   │   │   ├── context/   # Redux store and slices
│   │   │   ├── hooks/     # Custom React hooks
│   │   │   ├── interface/ # TypeScript interfaces
│   │   │   ├── lib/       # Utility functions
│   │   │   ├── provider/  # Context providers
│   │   │   ├── service/   # API service functions
│   │   │   └── style/     # Global CSS styles
│   │   └── public/        # Static assets
│   └── backend/           # NestJS backend application
│       ├── src/
│       │   ├── auth/      # Authentication module
│       │   ├── user/      # User management
│       │   ├── config/    # Configuration files
│       │   ├── common/    # Shared utilities
│       │   └── health/    # Health checks
│       └── test/          # Test files
├── database/              # Database schemas and migrations
├── docs/                  # Documentation
└── .env.example           # Environment variables template
```

## 🚀 Available Scripts

### Root Package Scripts

| Command | Description |
|---------|-------------|
| `npm run install:all` | Install all dependencies (root, frontend, backend) |
| `npm run dev` | Start both frontend and backend in development mode |
| `npm run build` | Build both frontend and backend for production |
| `npm run format` | Format code in both frontend and backend |
| `npm run clean` | Remove all node_modules directories |
| `npm run sync:db` | Sync database schema and seed data |
| `npm run refresh:db` | Refresh database with fresh seed data |

### Frontend Scripts (in `apps/frontend/`)

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

### Backend Scripts (in `apps/backend/`)

| Command | Description |
|---------|-------------|
| `npm run start:dev` | Start NestJS in development mode with watch |
| `npm run build` | Build TypeScript files |
| `npm run start` | Start production server |
| `npm run format` | Format code with Prettier |
| `npm run seed` | Refresh and seed database |
| `npm run seed:sync` | Sync database schema and seed |

## 📚 API Documentation

Once the backend is running, you can access the Swagger API documentation at:

```
http://localhost:8080/api
```

The API endpoints include:
- **Authentication**: Login, register, refresh tokens
- **Users**: Get user profile, update user information
- **Health**: System health checks

## 🤝 Contributing

We welcome contributions! Please follow these steps to contribute:

### 1. Fork the Repository
Click the "Fork" button at the top right of the repository page.

### 2. Clone Your Fork
```bash
git clone https://github.com/YOUR_USERNAME/Pingoo.git
cd Pingoo
```

### 3. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### 4. Make Your Changes
- Write clean, well-documented code
- Follow the existing code style
- Add tests if applicable
- Update documentation as needed

### 5. Commit Your Changes
```bash
git add .
git commit -m "Add: your feature description"
```

### 6. Push to Your Fork
```bash
git push origin feature/your-feature-name
```

### 7. Create a Pull Request
1. Go to the original repository
2. Click "New Pull Request"
3. Select your fork and feature branch
4. Add a clear description of your changes
5. Submit the pull request

## 📝 Pull Request Guidelines

When creating a pull request, please ensure:

1. **Descriptive Title**: Clearly describe what the PR does
2. **Detailed Description**: Explain the changes and why they're needed
3. **Related Issues**: Reference any related issues (e.g., "Fixes #123")
4. **Screenshots**: Include screenshots for UI changes
5. **Testing**: Confirm that your changes don't break existing functionality

### PR Template:
```
## Description
[Describe what this PR does]

## Changes Made
- [ ] Change 1
- [ ] Change 2
- [ ] Change 3

## Testing
- [ ] Tested locally
- [ ] All tests pass
- [ ] No breaking changes

## Screenshots (if applicable)
[Add screenshots here]

## Related Issues
Fixes #issue_number
```

## 🐛 Reporting Issues

If you find a bug or have a feature request, please create an issue on GitHub:

1. Go to the [Issues page](https://github.com/Rahi-007/Pingoo/issues)
2. Click "New Issue"
3. Choose the appropriate template
4. Provide as much detail as possible:
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Environment details (OS, browser, Node version)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [NestJS](https://nestjs.com/) - A progressive Node.js framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components
- [MikroORM](https://mikro-orm.io/) - TypeScript ORM

## 📞 Contact

- **Author**: Bisakto-Rahi
- **GitHub**: [@Rahi-007](https://github.com/Rahi-007)
- **Repository**: [https://github.com/Rahi-007/Pingoo](https://github.com/Rahi-007/Pingoo)

**Thank you! 🚀**