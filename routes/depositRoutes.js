const express = require('express');
const router = express.Router();
const { verifyJWT } = require('../middlewares/authMiddleware');
const { checkRole } = require('../middlewares/roleMiddleware');
const { createDeposit, getDeposits,getDepositsById } = require('../controllers/depositController');

router.post('/deposits',verifyJWT,checkRole('user','admin'), createDeposit);
//Get all Deposits..
router.get('/deposits',verifyJWT, checkRole('user','admin'), getDeposits);
//Get Deposits By Ids
router.get('/deposits/:id',verifyJWT, checkRole('user','admin'), getDepositsById);

module.exports = router;
