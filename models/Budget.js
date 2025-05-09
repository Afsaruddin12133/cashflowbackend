const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  budgetName: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  period: {
    type: String,
    enum: ['daily', 'weekly', 'monthly', 'yearly'],
    required: true
  },
  message: {
    type: String
  },
  categories: {
    type: [String],
    default: []
  },
  amount: {
    type: Number,
    required: true
  },
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Budget', budgetSchema);
