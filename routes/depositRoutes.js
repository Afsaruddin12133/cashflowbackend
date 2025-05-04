const express = require('express');
const router = express.Router();
const { verifyJWT } = require('../middlewares/authMiddleware');
const { checkRole } = require('../middlewares/roleMiddleware');
const { createDeposit, getDeposits } = require('../controllers/depositController');

router.post('/deposits',verifyJWT,checkRole('user'), createDeposit);
router.get('/deposits',verifyJWT, checkRole('user'), getDeposits);

module.exports = router;
