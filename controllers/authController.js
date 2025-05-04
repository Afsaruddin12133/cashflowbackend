const admin = require('../config/firebaseConfig'); // Firebase Admin SDK
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

// Manual Registration
const registration = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role
    });

    await newUser.save();

    res.status(201).json({ message: `User Registered Successfully as ${username}` });

  } catch (error) {
    res.status(500).json({ message: `Error Occurred: ${error.message}` });
  }
};

// Manual Login
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: "User Not Found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid Password" });

    const token = jwt.sign(
      { id: user._id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      token,
      message: `Logged In Successfully as ${username} (${user.role})`
    });

  } catch (error) {
    res.status(500).json({ message: `Error Occurred: ${error.message}` });
  }
};

// Google/Facebook Login using Firebase Token
const firebaseOAuthLogin = async (req, res) => {
  const firebaseToken = req.headers.authorization?.split(' ')[1];
  if (!firebaseToken) {
    return res.status(401).json({ message: 'Unauthorized: No Firebase token found' });
  }

  try {
    const decoded = await admin.auth().verifyIdToken();
    const { email, name, uid, firebase } = decoded;

    let user = await User.findOne({ email });

    // If user doesn't exist, register them
    if (!user) {
      user = new User({
        username: name || email.split('@')[0],  // Default username
        email,
        password: null, // Not applicable for OAuth
        role: 'user',   // Default role
        authProvider: firebase?.sign_in_provider || 'google/facebook'
      });
      await user.save();
    }

    const myToken = jwt.sign(
      { email: user.email, role: user.role, id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.json({ token: myToken, role: user.role, message: 'Logged in with Firebase OAuth' });

  } catch (error) {
    res.status(400).json({ message: 'Invalid Firebase token', error: error.message });
  }
};

module.exports = {
  registration,
  login,
  firebaseOAuthLogin,
};
