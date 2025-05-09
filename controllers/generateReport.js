// controllers/reportController.js
const Deposit = require("../models/Deposit");
const Expense = require("../models/Expense");
const Goal = require("../models/Goal");
const Investment = require("../models/Investment");
const Loan = require("../models/Loan");

exports.generateReport = async (req, res) => {
  const userId = req.user.id;

  try {
    const deposits = await Deposit.find({ userId });
    const expenses = await Expense.find({ userId });
    const goals = await Goal.find({ userId });
    const investments = await Investment.find({ userId });
    const loans = await Loan.find({ userId });

    // 1. Calculate totals
    const totalIncome = deposits.reduce((acc, cur) => acc + cur.amount, 0);
    const totalExpense = expenses.reduce((acc, cur) => acc + cur.amount, 0);

    // 2. Category wise expense
    const categoryExpense = {};
    expenses.forEach((e) => {
      categoryExpense[e.category] = (categoryExpense[e.category] || 0) + e.amount;
    });

    // 3. Goal progress
    const goalProgress = goals.map(goal => ({
      goalName: goal.goalName,
      percentage: ((goal.alreadySaved / goal.targetAmount) * 100).toFixed(2)
    }));

    res.json({
      totalIncome,
      totalExpense,
      netSavings: totalIncome - totalExpense,
      categoryExpense,
      goalProgress,
      totalInvestments: investments.length,
      totalLoans: loans.length,
    });

  } catch (err) {
    res.status(500).json({ error: "Failed to generate report" });
  }
};
