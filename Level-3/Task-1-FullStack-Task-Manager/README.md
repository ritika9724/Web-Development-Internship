# 🚀 Full Stack CRUD Application

A full-stack web application that performs **Create, Read, Update, and Delete (CRUD)** operations using a React frontend, Node.js/Express.js backend, and MongoDB database.

## 📌 Project Overview

This project demonstrates a complete full-stack CRUD application where users can create, view, update, and delete records through a user-friendly web interface.

The frontend communicates with the backend using REST APIs, while MongoDB is used to store and manage application data.

## ✨ Features

* Create new records
* View all records
* Update existing records
* Delete records
* RESTful API integration
* MongoDB database integration
* React-based frontend
* Node.js and Express.js backend
* Axios API communication
* Responsive user interface
* Form validation
* Error handling
* Real-time UI updates after CRUD operations

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
* CORS
* dotenv

## 📂 Project Structure

```text
Level-3-Task-1-FullStack-CRUD/
│
├── backend/
│   ├── models/
│   │   └── ...
│   ├── routes/
│   │   └── ...
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .gitignore
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

## 🔧 Backend Setup

Open a terminal and move into the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file inside the backend folder:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Do not upload `.env` to GitHub.

### Start Backend

```bash
node server.js
```
The backend will run

---

## 💻 Frontend Setup

Open another terminal and move into the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

If Axios is not already installed:

```bash
npm install axios
```

Start the React development server:

```bash
npm run dev
```

The frontend will normally run on:

```text
http://localhost:5173
```

## 🔗 CRUD Operations

The application supports the following operations:

### Create

Users can enter information through the frontend form and create a new record.

### Read

Existing records are fetched from MongoDB and displayed in the frontend.

### Update

Users can edit an existing record and save the updated information.

### Delete

Users can delete records from the database through the frontend.

## 🔌 API Endpoints

The backend provides REST API endpoints for CRUD operations.

| Method | Endpoint       | Description               |
| ------ | -------------- | ------------------------- |
| GET    | `/api/...`     | Get all records           |
| GET    | `/api/.../:id` | Get a specific record     |
| POST   | `/api/...`     | Create a new record       |
| PUT    | `/api/.../:id` | Update an existing record |
| DELETE | `/api/.../:id` | Delete a record           |

> Replace `/api/...` with the exact API route used in your project.

## 🧪 Testing

The API can be tested using tools such as:

* Postman
* Browser
* Frontend application

CRUD functionality can be tested by:

1. Creating a new record.
2. Checking that it appears in the list.
3. Editing the record.
4. Verifying the updated information.
5. Deleting the record.
6. Confirming that it is removed from the list.

## 🔄 Application Flow

```text
User
  ↓
React Frontend
  ↓
Axios
  ↓
Express.js REST API
  ↓
Mongoose
  ↓
MongoDB
```

## 🎯 Learning Outcomes

This project helped practice:

* Full-stack web development
* React component development
* REST API creation
* CRUD operations
* MongoDB database management
* Mongoose models
* Express.js routing
* Axios API integration
* Client-server communication
* Form handling
* Error handling
* Frontend and backend integration

## 📸 Project Screens

The project includes:

* CRUD application dashboard
* Add/Create form
* Records list
* Edit/Update functionality
* Delete functionality
* Responsive user interface

## 🔒 Security & Best Practices

* Sensitive environment variables are stored in `.env`.
* `.env` should not be uploaded to GitHub.
* `node_modules` should not be uploaded to GitHub.
* Input validation is used for forms.
* Backend errors are handled appropriately.

## 👨‍💻 Author

**Ritika**

- GitHub: https://github.com/ritika9724

