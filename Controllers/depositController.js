// const Deposit = require('../models/Deposit');

// // Create deposit
// exports.createDeposit = async (req, res) => {
//   try {
//     const deposit = new Deposit(req.body);
//     await deposit.save();
//     res.status(201).json(deposit);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Get all deposits
// exports.getDeposits = async (req, res) => {
//   try {
//     const deposits = await Deposit.find().sort('-date');
//     res.json(deposits);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };