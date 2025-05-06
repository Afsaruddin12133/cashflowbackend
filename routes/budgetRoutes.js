const express = require('express');
const router = express.Router();
const {createBudget,getAllBudgets} = require('../controllers/budgetController');
const { verifyJWT } = require('../middlewares/authMiddleware');
const { checkRole } = require('../middlewares/roleMiddleware');

router.post('/budgets',verifyJWT,checkRole('user','admin'), createBudget);
router.get('/budgets', verifyJWT,checkRole('user','admin'), getAllBudgets);


module.exports = router;