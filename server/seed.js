const mongoose = require('mongoose');
const Question = require('./models/Question');
require('dotenv').config();

seedData = [
  {
    category: 'aptitude',
    question: 'The average of first 50 natural numbers is:',
    options: ['25.5', '25', '26.5', '24.5'],
    answer: '25.5',
    explanation: 'Sum = n(n+1)/2 → 50×51/2 = 1275 → Avg = 1275/50 = 25.5'
  },
  {
    category: 'aptitude',
    question: 'What is the least number which when divided by 6, 7, 8, 9 and 10 leaves remainder 1 in each case?',
    options: ['2519', '2518', '5039', '5038'],
    answer: '2519',
    explanation: 'LCM of 6,7,8,9,10 = 2520 → 2520 - 1 = 2519'
  }
];
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Connected to DB');
    await Question.deleteMany({});
    await Question.insertMany(seedData);
    console.log('Inserted seed questions');
    process.exit();
  })
  .catch(err => {
    console.error('Seed error:', err);
    process.exit(1);
  });
