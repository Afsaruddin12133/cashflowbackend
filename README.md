# CashFlow Backend

**CashFlow** is a personal finance management application designed to help users track expenses, manage budgets, and gain insights into their financial habits. This repository contains the backend API built with Node.js and Express.js.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Secure login and registration using JWT.
- **Expense Tracking**: Add, update, and delete expenses.
- **Income Management**: Record and manage income sources.
- **Budgeting**: Set monthly budgets and monitor spending.
- **Financial Reports**: Generate summaries and insights.
- **Responsive API**: RESTful endpoints for seamless frontend integration.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JSON Web Tokens (JWT)
- **Environment Management**: dotenv
- **Logging**: Morgan
- **Validation**: express-validator

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Afsaruddin12133/cashflowbackend.git
   cd cashflowbackend
2. **Install dependencies*** :
   ```bash
   npm install
3. **Set up environment variables**:
   ```bash
   PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

4. **Running the Application**
   npm run dev

### Project Structure
cashflowbackend/
├── config/             # Configuration files (e.g., DB connection)
├── controllers/        # Route handlers
├── middlewares/        # Custom middleware functions
├── models/             # Mongoose schemas and models
├── routes/             # Express route definitions
├── .env                # Environment variables
├── .gitignore          # Files and directories to ignore in Git
├── index.js            # Entry point of the application
├── package.json        # Project metadata and scripts
└── README.md           # Project documentation

API Endpoints
Authentication
POST /api/auth/register – Register a new user.

POST /api/auth/login – Authenticate user and return JWT.

Expenses
GET /api/expenses – Retrieve all expenses for the authenticated user.

POST /api/expenses – Add a new expense.

PUT /api/expenses/:id – Update an existing expense.

DELETE /api/expenses/:id – Delete an expense.

Income
GET /api/income – Retrieve all income records.

POST /api/income – Add a new income record.

PUT /api/income/:id – Update an income record.

DELETE /api/income/:id – Delete an income record.

Budgets
GET /api/budgets – Retrieve budget information.

POST /api/budgets – Set a new budget.

PUT /api/budgets/:id – Update budget details.

DELETE /api/budgets/:id – Remove a budget.

Note: All endpoints (except authentication) require a valid JWT token in the Authorization header.


---

### ✅ To push this `README.md` to your GitHub repo:

```bash
# Make sure you are inside the project folder
cd cashflowbackend

# Save this content into README.md
nano README.md  # Or use any code editor to paste the full content

# Then run the following Git commands:
git add README.md
git commit -m "docs: add full project documentation to README.md"
git push origin main  # Or the branch you are working on

