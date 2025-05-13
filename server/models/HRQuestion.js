// models/HRQuestion.js

const mongoose = require('mongoose');

const hrSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('HRQuestion', hrSchema);
