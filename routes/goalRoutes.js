const express = require('express');
const router = express.Router();

const { createGoal, getGoals } = require('../controllers/goalController');

router.post('/', createGoal);  // Add new goal
router.get('/', getGoals);     // Get all goals

module.exports = router;
