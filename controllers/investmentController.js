// controllers/investmentController.js
const Investment = require('../models/Investment');

// Create new investment
exports.createInvestment = async (req, res) => {
  try {
    const investment = new Investment(req.body);
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