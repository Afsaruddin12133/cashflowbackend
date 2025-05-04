const express = require('express');
const router = express.Router();
const {registration,login,firebaseOAuthLogin,protectedResource} = require('../controllers/authController');

router.post('/registation', registration);
router.post('/login', login);
router.post('/firebase-login', firebaseOAuthLogin);


module.exports = router;