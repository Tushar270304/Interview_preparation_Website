// routes/hr.js

const express = require('express');
const router = express.Router();
const HRQuestion = require('../models/HRQuestion');

// GET all HR questions
router.get('/', async (req, res) => {
  try {
    const questions = await HRQuestion.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching HR questions', error: err });
  }
});

module.exports = router;
