const express = require('express');
const router = express.Router();
const { verifyJWT } = require('../middlewares/authMiddleware');
const { checkRole } = require('../middlewares/roleMiddleware');
const { createGoal, getGoals } = require('../controllers/goalController');

router.post('/goals',verifyJWT,checkRole('user'), createGoal);  
router.get('/goals',verifyJWT,checkRole('user'), getGoals);     

module.exports = router;


