# 🔐 User Authentication System

A secure full-stack user authentication system built using **React, Node.js, Express.js, MongoDB, and JWT**.

## 📌 Project Overview

This project implements a complete user authentication system with registration, login, password hashing, JWT-based authentication, protected user profile, and logout functionality.

The frontend is built with React and the backend is built with Node.js and Express.js. MongoDB is used to store user information securely.

## 🚀 Features

* User Registration
* User Login
* Password Hashing using bcrypt
* JWT Authentication
* Protected Profile Route
* MongoDB Database Integration
* Logout Functionality
* React Frontend
* Express.js Backend
* Frontend and Backend API Integration
* Input Validation
* Error Handling
* Responsive Authentication UI

## 🛠️ Technologies Used

### Frontend

* React
* Vite
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* bcryptjs
* dotenv
* CORS

## 📂 Project Structure

```text
Task-2-User-Authentication/
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   └── User.js
│
├── routes/
│   └── authRoutes.js
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

## ⚙️ Installation

### 1. Clone or open the project

Open the project folder in VS Code.

### 2. Install backend dependencies

Open a terminal in the project root:

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root.

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Do not share your actual MongoDB connection string or JWT secret publicly.

### 4. Start the backend

```bash
node server.js
```

The backend runs on:

```text
http://localhost:5000
```

### 5. Install frontend dependencies

Open another terminal:

```bash
cd frontend
npm install
```

### 6. Install Axios

```bash
npm install axios
```

### 7. Start the frontend

```bash
npm run dev
```

The frontend normally runs on:

```text
http://localhost:5173
```

## 🔑 Authentication Flow

### Registration

The user enters:

* Name
* Email
* Password

The frontend sends the data to:

```text
POST /api/auth/register
```

The password is hashed before being stored in MongoDB.

### Login

The user enters their email and password.

The frontend sends:

```text
POST /api/auth/login
```

After successful authentication, the server generates a JWT token.

The frontend stores the token locally for the authenticated session.

### Protected Profile

The authenticated user can access:

```text
GET /api/auth/profile
```

The request uses the JWT token in the Authorization header.

Example:

```text
Authorization: Bearer <JWT_TOKEN>
```

### Logout

When the user logs out, the stored authentication information is removed from the browser and the user returns to the login screen.

## 🔗 API Endpoints

| Method | Endpoint             | Description                    |
| ------ | -------------------- | ------------------------------ |
| POST   | `/api/auth/register` | Register a new user            |
| POST   | `/api/auth/login`    | Login an existing user         |
| GET    | `/api/auth/profile`  | Get authenticated user profile |

```

## 🔒 Security

The project follows basic authentication security practices:

* Passwords are hashed using bcrypt.
* Passwords are never displayed in the frontend.
* JWT is used for authenticated requests.
* Protected routes require a valid JWT.
* Sensitive environment variables are stored in `.env`.
* `.env` should not be committed to GitHub.

## 📸 Project Screens

The project includes:

* Login Page
* Registration Page
* Registration Success Message
* Logged-in User Profile
* JWT Protected Profile
* Logout Functionality

## 🎯 Learning Outcomes

Through this project, the following concepts were practiced:

* React frontend development
* REST API integration
* Express.js routing
* MongoDB database integration
* Password hashing
* JWT authentication
* Middleware implementation
* Protected API routes
* Client-server communication
* Authentication state management

## Author

**Ritika**

- GitHub: https://github.com/ritika9724


