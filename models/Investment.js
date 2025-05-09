// models/Investment.js
const mongoose = require('mongoose');

const investmentSchema = new mongoose.Schema({
  investorName: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  investmentType: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  returnRate: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'withdrawn', 'matured'],
    default: 'active',
  },
  notes: {
    type: String,
  },
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Investment', investmentSchema);
