const express = require('express');
const connectDB = require('./config//db');
const cors = require('cors');
const authRouter = require('./routes/authRoutes');
const depositRoute = require('./routes/depositRoutes');
const expensesRoute = require('./routes/expenseRoutes');
const goalsRoute = require('./routes/goalRoutes');
const budgetRoutes = require('./routes/budgetRoutes');
const loanRoutes = require('./routes/loanRoutes');
const investmentRoutes = require('./routes/investmentRoutes');
const generateReportRoutes = require('./routes/generateReport');
const analyticsRoutes = require('./routes/analyticsRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));


// Connect Database
connectDB();
//console.log(JSON.stringify(require('./firebaseServiceAccountKey.json')));

// Routes
 app.use('/api/auth', authRouter);
 app.use('/api', depositRoute);
 app.use('/api', expensesRoute);
 app.use('/api', goalsRoute);
 app.use('/api', budgetRoutes);
 app.use('/api', loanRoutes);
 app.use('/api', investmentRoutes);
 app.use('/api', generateReportRoutes);
 app.use('/api', analyticsRoutes);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});