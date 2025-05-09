// models/Loan.js
const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  borrowerName: {
    type: String,
    required: true,
  },
  loanAmount: {
    type: Number,
    required: true,
  },
  loanType: {
    type: String,
    required: true,
  },
  interestRate: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'paid', 'overdue'],
    default: 'active',
  },
  description: {
    type: String,
  },
  userId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'User',
  required: true,
},
}, { timestamps: true });

module.exports = mongoose.model('Loan', loanSchema);
