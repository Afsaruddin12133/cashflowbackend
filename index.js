const express = require('express');
const connectDB = require('./config//db');
const cors = require('cors');
const depositRoute = require('./routes/depositRoutes');
const expensesRoute = require('./routes/expenseRoutes');
const goalsRoute = require('./routes/goalRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect Database
connectDB();

// Routes
 app.use('/api/deposits', depositRoute);
 app.use('/api/expenses', expensesRoute);
 app.use('/api/goals', goalsRoute);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});