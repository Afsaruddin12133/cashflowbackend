const Expense = require('../models/Expense');
const Deposit = require('../models/Deposit');
const Budget = require('../models/Budget');
const Goal = require('../models/Goal');
const Investment = require('../models/Investment');
const Loan = require('../models/Loan');

// Controller to fetch analytics data for a user
exports.getAnalytics = async (req, res) => {
  try {
    const userId = req.user.id;  // Assuming the user ID is attached to the request after authentication

    // Fetch user expenses
    const expenses = await Expense.find({ userId });
    // Fetch user deposits
    const deposits = await Deposit.find({ userId });
    // Fetch user budgets
    const budgets = await Budget.find({ userId });
    // Fetch user goals
    const goals = await Goal.find({ userId });
    // Fetch user investments
    const investments = await Investment.find({ userId });
    // Fetch user loans
    const loans = await Loan.find({ userId });

    // Calculate total expenses
    const totalExpenses = expenses.length > 0
      ? expenses.reduce((acc, expense) => acc + expense.amount, 0)
      : 0;

    // Calculate total deposits
    const totalDeposits = deposits.length > 0
      ? deposits.reduce((acc, deposit) => acc + deposit.amount, 0)
      : 0;

    // Calculate total budget amount
    const totalBudgetAmount = budgets.length > 0
      ? budgets.reduce((acc, budget) => acc + budget.amount, 0)
      : 0;

    // Calculate total goal savings
    const totalGoalSavings = goals.length > 0
      ? goals.reduce((acc, goal) => acc + goal.alreadySaved, 0)
      : 0;

    // Calculate total investments
    const totalInvestments = investments.length > 0
      ? investments.reduce((acc, investment) => acc + investment.amount, 0)
      : 0;

    // Calculate total loan amount
    const totalLoans = loans.length > 0
      ? loans.reduce((acc, loan) => acc + loan.loanAmount, 0)
      : 0;

    // Calculate monthly expense
    const monthlyExpense = expenses.length > 0
      ? totalExpenses / new Set(expenses.map(expense => expense.date.getMonth())).size
      : 0;

    // ** New Analytics: **

    // Most frequent expense categories
    const categoryCount = expenses.reduce((acc, expense) => {
      acc[expense.category] = (acc[expense.category] || 0) + 1;
      return acc;
    }, {});
    const mostFrequentCategory = Object.entries(categoryCount).reduce((a, b) => b[1] > a[1] ? b : a, ["", 0]);

    // Total savings vs goal amount
    const totalSavings = totalDeposits + totalInvestments;
    const totalGoalAmount = goals.reduce((acc, goal) => acc + goal.amount, 0);
    const savingsVsGoal = totalGoalAmount > 0 ? (totalSavings / totalGoalAmount) * 100 : 0;

    // Expense Growth Over Time (Monthly Growth)
    const expensesByMonth = expenses.reduce((acc, expense) => {
      const month = expense.date.getMonth();
      acc[month] = (acc[month] || 0) + expense.amount;
      return acc;
    }, {});
    const expenseGrowth = Object.entries(expensesByMonth).map(([month, amount], index, arr) => {
      if (index === 0) return 0;
      return ((amount - arr[index - 1][1]) / arr[index - 1][1]) * 100;
    });

    // Income vs Expenses Comparison (For this, we assume you have income data)
    const income = totalDeposits; // Assuming deposits are income in your model
    const incomeVsExpense = income > totalExpenses ? "Income is greater than expenses" : "Expenses exceed income";

    // Loan vs Savings Ratio
    const loanVsSavingsRatio = totalLoans > 0 && totalSavings > 0
      ? totalLoans / totalSavings
      : 0;

    // Investment Growth Over Time (Annual Growth)
    const investmentGrowth = investments.length > 0
      ? investments.reduce((acc, investment) => acc + investment.amount, 0) / totalInvestments * 100
      : 0;

    // Analytics Response
    const analytics = {
      totalExpenses,
      totalDeposits,
      totalBudgetAmount,
      totalGoalSavings,
      totalInvestments,
      totalLoans,
      monthlyExpense,
      mostFrequentCategory,
      savingsVsGoal,
      expenseGrowth,
      incomeVsExpense,
      loanVsSavingsRatio,
      investmentGrowth,
    };

    return res.status(200).json(analytics);

  } catch (error) {
    console.error("Error in analyticsController:", error);
    return res.status(500).json({ error: "An error occurred while fetching analytics." });
  }
};
