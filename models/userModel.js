const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: {
    type: String,
    required: function() {
      // Password is required only for manual signups
      return this.authProvider === 'manual';
    }
  },
  role: { 
    type: String,
    required: true,
    enum: ['admin', 'manager', 'user'],
    default: 'user'
  },
  authProvider: {
    type: String,
    enum: ['manual', 'google', 'facebook'],
    default: 'manual'
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', userSchema);
