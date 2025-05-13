const mongoose = require('mongoose');
const HRQuestion = require('./models/HRQuestion');

async function seedHR() {
  try {
    await mongoose.connect('mongodb+srv://wankhedetushar9:vB900JTvt1jbcVtW@cluster0.nbwms5t.mongodb.net/interviewprep?retryWrites=true&w=majority&appName=Cluster0');

    const hrData = [
      {
        question: "Tell me about yourself.",
        answer: "A brief overview of your education, experiences, and goals."
      },
      {
        question: "What are your strengths and weaknesses?",
        answer: "Strength: Adaptability; Weakness: Overcommitting sometimes."
      }
      // Add more
    ];

    await HRQuestion.deleteMany({}); // Optional: clear old
    await HRQuestion.insertMany(hrData);

    console.log("✅ HR questions inserted successfully.");
  } catch (err) {
    console.error("❌ Seeding failed:", err);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 MongoDB connection closed.");
  }
}

seedHR();
