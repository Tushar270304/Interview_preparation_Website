const mongoose = require('mongoose');
const CodingQuestion = require('./models/CodingQuestion');
require('dotenv').config();

const seedData = [
  {
    question: "What is the output of console.log(2 + 3)?",
    answer: "5"
  },
  {
    question: "What is a closure in JavaScript?",
    answer: "A closure is a function having access to the parent scope even after the parent function has closed."
  },
  {
    question: "Difference between var, let and const?",
    answer: "`var` is function-scoped, `let` and `const` are block-scoped. `const` cannot be reassigned."
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Connected to DB');
    await CodingQuestion.deleteMany({});
    await CodingQuestion.insertMany(seedData);
    console.log('Inserted seed coding questions');
    process.exit();
  })
  .catch(err => {
    console.error('Seed error:', err);
    process.exit(1);
  });
