// routes/investmentRoutes.js
const express = require('express');
const router = express.Router();
const { verifyJWT } = require('../middlewares/authMiddleware');
const { checkRole } = require('../middlewares/roleMiddleware');
const investmentController = require('../controllers/investmentController');

router.post('/investments',verifyJWT,checkRole('user','admin'), investmentController.createInvestment);
// Get all
router.get('/investments',verifyJWT,checkRole('user','admin'), investmentController.getInvestments);
// Get by Id..
router.get('/investments/:id',verifyJWT,checkRole('user','admin'), investmentController.getInvestmentById);

module.exports = router;
