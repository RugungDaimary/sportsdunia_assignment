# Backend Developer Assignment

## Overview
This project is a backend application built using NestJS and PostgreSQL to manage and query college-related data. It includes features for authentication, college placements, courses, cities, and states, with a focus on performance and scalability.

## Features
- **Authentication**: JWT-based authentication with login and signup functionality.
- **College Management**: CRUD operations for managing colleges, placements, and courses.
- **Data Filtering**: Ability to filter colleges by city and state.
- **Complex Queries**: Endpoints to retrieve average placement data and trends.
- **API Documentation**: Swagger documentation for all endpoints.

## Project Structure
```
backend-developer-assignment
├── src
│   ├── auth
│   ├── colleges
│   ├── college-placement
│   ├── college-wise-course
│   ├── cities
│   ├── states
│   ├── users
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   └── common
├── test
├── .env
├── .eslintrc.js
├── .prettierrc
├── nest-cli.json
├── package.json
├── README.md
├── tsconfig.build.json
└── tsconfig.json
├── test
├── .env
├── .eslintrc.js
├── .prettierrc
├── nest-cli.json
├── package.json
├── README.md
├── tsconfig.build.json
└── tsconfig.json
```

## Setup Instructions
1. **Clone the Repository**
   ```
   git clone <repository-url>
   cd backend-developer-assignment
   ```

2. **Install Dependencies**
   ```
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add your database connection details and JWT secret.

4. **Run Database Migrations**
   Ensure PostgreSQL is running and execute the migration scripts to set up the database schema.

5. **Start the Application**
   ```
   npm run start:dev
   ```

6. **Access API Documentation**
   Open your browser and navigate to `http://localhost:3000/api`.

## API Endpoints
- **Authentication**
  - `POST /auth/login`: Login user and return JWT.
  - `POST /auth/signup`: Register a new user.

- **Colleges**
  - `GET /colleges`: Get all colleges, filter by city/state.
  - `GET /college_data/{college_id}`: Get placement data for a specific college.

- **College Courses**
  - `GET /college_courses/{college_id}`: Get courses for a specific college.

## Testing
Run the end-to-end tests using:
```
npm run test:e2e
```

## Deployment
The application is deployed on Render. Access the live API at `<render-url>`.

## Additional Notes
- Ensure to seed the database with realistic dummy data for testing.
- Follow best practices for code quality and structure throughout the project.

