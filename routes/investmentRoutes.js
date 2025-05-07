// routes/investmentRoutes.js
const express = require('express');
const router = express.Router();
const { verifyJWT } = require('../middlewares/authMiddleware');
const { checkRole } = require('../middlewares/roleMiddleware');
const investmentController = require('../controllers/investmentController');

router.post('/investments',verifyJWT,checkRole('user'), investmentController.createInvestment);
router.get('/investments',verifyJWT,checkRole('user'), investmentController.getInvestments);

module.exports = router;
