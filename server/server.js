const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const questionRoutes = require('./routes/questions');
app.use('/api/questions', questionRoutes);

const codingRoutes = require('./routes/coding');
app.use('/api/coding', codingRoutes);

const hrRoutes = require('./routes/hr');
app.use('/api/hr', hrRoutes);

const resumeTipsRoutes = require('./routes/resumeTips');
app.use('/api/resume', resumeTipsRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('DB Error:', err));

// Error handling middleware (optional but recommended)
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const statusCode = error.status || 500;
  res.status(statusCode).json({
    message: error.message,
    stack: error.stack,
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
