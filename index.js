require('dotenv').config();
const express = require('express');
const connectDB = require('./db//db');
const cors = require('cors');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
 app.use('/api/deposits', require('./routes/depositRoutes'));
 app.use('/api/expenses', require('./routes/expenseRoutes'));
 app.use('/api/goals', require('./routes/goalRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});