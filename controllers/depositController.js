const Deposit = require('../models/Deposit');

// POST /api/deposits - Add new deposit
const createDeposit = async (req, res) => {
  try {
    const { name, status, date, amount, category, message } = req.body;

    const newDeposit = new Deposit({
       name, 
       status, 
       date, 
       amount, 
       category, 
       message,
       userId: req.user.id 
    });
    const savedDeposit = await newDeposit.save();

    res.status(201).json(savedDeposit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /api/deposits - Get all deposits
const getDeposits = async (req, res) => {
  try {
    const deposits = await Deposit.find();
    res.json(deposits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getDepositsById = async (req, res) => {
  try {
    const deposits = await Deposit.find({userId:req.params.id});
    if(!deposits) return res.status(404).json({ message: "Deposit not found" });
    res.json(deposits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createDeposit, getDeposits,getDepositsById };
