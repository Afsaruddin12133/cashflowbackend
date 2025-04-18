const Expense = require('../models/Expense');

// POST /api/expenses - Add a new expense
const createExpense = async (req, res) => {
  try {
    const { amount, description, category, date } = req.body;

    const newExpense = new Expense({ amount, description, category, date });
    const savedExpense = await newExpense.save();

    res.status(201).json(savedExpense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /api/expenses - Get all expenses
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ createdAt: -1 });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createExpense, getExpenses };
