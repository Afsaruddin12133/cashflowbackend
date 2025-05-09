// routes/loanRoutes.js
const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');
const { verifyJWT } = require('../middlewares/authMiddleware');
const { checkRole } = require('../middlewares/roleMiddleware');

router.post('/loans',verifyJWT,checkRole('user','admin'), loanController.createLoan);
router.get('/loans',verifyJWT,checkRole('user','admin'), loanController.getLoans);


module.exports = router;
