const mongoose = require('mongoose');

const ResumeTipSchema = new mongoose.Schema({
  tip: {
    type: String,
    required: true,
  },
  explanation: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('ResumeTip', ResumeTipSchema);
