const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// GET Aptitude Questions
router.get('/aptitude', async (req, res) => {
  try {
    const questions = await Question.find({ category: 'aptitude' });
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
