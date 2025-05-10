const express = require('express');
const router = express.Router();
const { verifyJWT } = require('../middlewares/authMiddleware');
const { checkRole } = require('../middlewares/roleMiddleware');
const { createGoal, getGoals,getGoalsById } = require('../controllers/goalController');

router.post('/goals',verifyJWT,checkRole('user','admin'), createGoal);  
//Get all goals
router.get('/goals',verifyJWT,checkRole('user','admin'), getGoals);    

//Get goals by Id
router.get('/goals/:id',verifyJWT,checkRole('user','admin'), getGoalsById);  

module.exports = router;


