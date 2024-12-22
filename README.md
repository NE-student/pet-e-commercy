# E-Commerce Platform

A modern e-commerce platform built with microservices architecture.

## Technology Stack

### Frontend
- React with TypeScript
- Redux Toolkit for state management
- Styled Components for styling
- React Router for navigation
- Axios for API communication

### Backend Microservices
- Node.js with TypeScript
- Express.js
- PostgreSQL with Prisma ORM
- Redis for caching
- Docker & Docker Compose
- JWT Authentication

## Services

1. **API Gateway** (Port 3000)
   - Routes requests to appropriate microservices
   - Handles CORS and security

2. **Auth Service** (Port 3001)
   - User authentication and authorization
   - JWT token management
   - User management

3. **Product Service** (Port 3002)
   - Product catalog management
   - Product search and filtering

4. **Cart Service** (Port 3003)
   - Shopping cart management
   - Uses Redis for performance

5. **Order Service** (Port 3004)
   - Order processing
   - Order history

6. **Payment Service** (Port 3005)
   - Payment processing
   - Integration with payment providers

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Docker and Docker Compose
- PostgreSQL
- Redis

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd e-commerce
   ```

2. Install dependencies:
   ```bash
   # Frontend
   cd Frontend/ecommerce-frontend
   npm install

   # Backend services
   cd ../../Backend
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env` in each service directory
   - Update the variables as needed

4. Start the services:
   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

5. Access the application:
   - Frontend: http://localhost:5173
   - API Gateway: http://localhost:3000

## Development

### Frontend Development
```bash
cd Frontend/ecommerce-frontend
npm run dev
```

### Backend Development
```bash
cd Backend
npm run dev
```

## Docker Deployment

Start all services:
```bash
docker-compose up
```

Start specific service:
```bash
docker-compose up <service-name>
```

## Project Structure
```
.
├── Frontend/
│   └── ecommerce-frontend/
│       ├── src/
│       │   ├── components/
│       │   ├── features/
│       │   ├── pages/
│       │   └── services/
│       └── package.json
│
└── Backend/
    ├── gateway/
    ├── auth-service/
    ├── product-service/
    ├── cart-service/
    ├── order-service/
    ├── payment-service/
    └── docker-compose.yml
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


