const express = require('express');
const router = express.Router();
const { verifyJWT } = require('../middlewares/authMiddleware');
const { checkRole } = require('../middlewares/roleMiddleware');
const { createExpense, getExpenses,getExpensesById } = require('../controllers/expenseController');

router.post('/expenses', verifyJWT,checkRole('user','admin'),createExpense); 


router.get('/expenses',verifyJWT,checkRole('user','admin'), getExpenses);
//Get expense by Ids     
router.get('/expenses/:id',verifyJWT,checkRole('user','admin'), getExpensesById);     

module.exports = router;
