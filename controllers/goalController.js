const Goal = require('../models/Goal');

// POST /api/goals - Add a new goal
const createGoal = async (req, res) => {
  try {
    const { goalName, targetAmount, alreadySaved, priority, desiredDate, category } = req.body;

    const newGoal = new Goal({
      goalName,
      targetAmount,
      alreadySaved,
      priority,
      desiredDate,
      category,
      userId: req.user.id, 
    });

    const savedGoal = await newGoal.save();
    res.status(201).json(savedGoal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /api/goals - Get all goals
const getGoals = async (req, res) => {
  try {
    const goals = await Goal.find().sort({ createdAt: -1 });
    res.json(goals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createGoal, getGoals };
