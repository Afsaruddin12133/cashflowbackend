const express = require('express');
const router = express.Router();
const { verifyJWT } = require('../middlewares/authMiddleware');
const { checkRole } = require('../middlewares/roleMiddleware');
const { createExpense, getExpenses } = require('../controllers/expenseController');

router.post('/expenses', verifyJWT,checkRole('user','admin'),createExpense);  // Add new expense
router.get('/expenses',verifyJWT,checkRole('user','admin'), getExpenses);     // Get all expenses

module.exports = router;
