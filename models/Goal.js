const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  goalName: {
    type: String,
    required: true
  },
  targetAmount: {
    type: Number,
    required: true
  },
  alreadySaved: {
    type: Number,
    default: 0
  },
  priority: {
    type: String,
    enum: ['High', 'Medium', 'Low'],
    required: true
  },
  desiredDate: {
    type: Date,
    required: true
  },
  category: {
    type: String,
    required: true
  },
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Goal', goalSchema);
