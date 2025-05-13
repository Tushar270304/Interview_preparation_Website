const express = require('express');
const router = express.Router();
const CodingQuestion = require('../models/CodingQuestion');

// GET all coding questions
router.get('/', async (req, res) => {
  try {
    const questions = await CodingQuestion.find({});
    res.json(questions); // Return an array
  } catch (err) {
    console.error('Coding Route Error:', err.message);
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});

module.exports = router;
