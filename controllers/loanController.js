// controllers/loanController.js
const Loan = require('../models/Loan');

// Create new loan
exports.createLoan = async (req, res) => {
  try {
    const loan = new Loan({
      ...req.body,
      userId: req.user.id, 
    });
    await loan.save();
    res.status(201).json(loan);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all loans
exports.getLoans = async (req, res) => {
  try {
    const loans = await Loan.find();
    res.status(200).json(loans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Get loans by id
exports.getLoansById = async (req, res) => {
  try {
    const loans = await Loan.find({userId:req.params.id});
    if(!loans)return res.status(404).json({ message: 'loan not found' });
    res.status(200).json(loans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};