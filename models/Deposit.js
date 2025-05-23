const mongoose = require("mongoose");

const DepositSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  status: { 
    type: String, 
    required: true 
  },
  date: { 
    type: Date, 
    required: true 
  },
  amount: { 
    type: Number, 
    required: true 
  },
  category: { 
    type: String 
  },
  message: { 
    type: String 
  },
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model("Deposit", DepositSchema);
