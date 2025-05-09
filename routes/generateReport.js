const express = require('express');
const router = express.Router();
const { verifyJWT } = require('../middlewares/authMiddleware');
const { checkRole } = require('../middlewares/roleMiddleware');
const { generateReport } = require('../controllers/generateReport');


router.get("/reports", verifyJWT,checkRole('user','admin'), generateReport);   

module.exports = router;
