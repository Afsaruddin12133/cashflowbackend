const express = require('express');
const router = express.Router();
const { createDeposit, getDeposits } = require('../controllers/depositController');

router.post('/', createDeposit);
router.get('/', getDeposits);

module.exports = router;
