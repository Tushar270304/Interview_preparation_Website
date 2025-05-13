const mongoose = require('mongoose');
const dotenv = require('dotenv');
const ResumeTip = require('./models/ResumeTip');

dotenv.config();

const tips = [
  {
    tip: "Tailor your resume for each job",
    explanation: "Customize your resume to include keywords and experiences relevant to each specific job description."
  },
  {
    tip: "Keep it concise",
    explanation: "Limit your resume to one page if possible, especially if you are a fresher."
  },
  {
    tip: "Highlight achievements, not just duties",
    explanation: "Use bullet points to show what you accomplished, not just what you were responsible for."
  },
  {
    tip: "Use action verbs",
    explanation: "Start each bullet point with a strong verb like 'Led', 'Developed', 'Achieved', etc."
  },
  {
    tip: "Proofread your resume",
    explanation: "Spelling or grammar mistakes can ruin a first impression. Use tools like Grammarly or ask a friend to review."
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await ResumeTip.deleteMany({});
    await ResumeTip.insertMany(tips);
    console.log("✅ Resume tips seeded successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Failed to seed resume tips:", err);
  }
}

seed();
