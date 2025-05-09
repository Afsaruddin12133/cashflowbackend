const express = require("express");
const router = express.Router();
const { verifyJWT } = require('../middlewares/authMiddleware');
const { checkRole } = require('../middlewares/roleMiddleware');
const { getAnalytics } = require('../controllers/analyticsController');

router.get("/analytics", verifyJWT,checkRole('user','admin'), getAnalytics);

module.exports = router;
