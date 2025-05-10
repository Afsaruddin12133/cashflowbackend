// controllers/investmentController.js
const Investment = require('../models/Investment');

// Create new investment
exports.createInvestment = async (req, res) => {
  try {
    const investment = new Investment({
      ...req.body,
      userId: req.user.id,
    });
    await investment.save();
    res.status(201).json(investment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all investments
exports.getInvestments = async (req, res) => {
  try {
    const investments = await Investment.find();
    res.status(200).json(investments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get investment by ID
exports.getInvestmentById = async (req, res) => {
  
  try {
    const investment = await Investment.find({userId:req.params.id});
    if (!investment) return res.status(404).json({ message: 'Investment not found' });
    res.status(200).json(investment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};