const express = require('express');
const router = express.Router();

const { createExpense, getExpenses } = require('../controllers/expenseController');

router.post('/', createExpense);  // Add new expense
router.get('/', getExpenses);     // Get all expenses

module.exports = router;
