const Budget = require('../models/Budget');

// Create new budget
const createBudget = async (req, res) => {
  try {
    const budget = new Budget(req.body);
    await budget.save();
    res.status(201).json(budget);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all budgets
const getAllBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find();
    res.status(200).json(budgets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
    createBudget,
    getAllBudgets
}