const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  category: String,
  question: String,
  options: [String],
  answer: String,
  explanation: String
});

module.exports = mongoose.model('Question', questionSchema);

