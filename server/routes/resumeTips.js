const express = require('express');
const router = express.Router();
const ResumeTip = require('../models/ResumeTip');

// GET all tips
router.get('/', async (req, res) => {
  try {
    const tips = await ResumeTip.find();
    res.json(tips);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});

module.exports = router;
