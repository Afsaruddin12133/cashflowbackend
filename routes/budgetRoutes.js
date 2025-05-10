const express = require('express');
const router = express.Router();
const {createBudget,getAllBudgets,getAllBudgetsById} = require('../controllers/budgetController');
const { verifyJWT } = require('../middlewares/authMiddleware');
const { checkRole } = require('../middlewares/roleMiddleware');

router.post('/budgets',verifyJWT,checkRole('user','admin'), createBudget);
// Get all budgets
router.get('/budgets', verifyJWT,checkRole('user','admin'), getAllBudgets);
// Get all budgets for user by Id
router.get('/budgets/:id', verifyJWT,checkRole('user','admin'), getAllBudgetsById);


module.exports = router;