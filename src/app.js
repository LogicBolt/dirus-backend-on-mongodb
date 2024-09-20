const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const gameUserRoutes = require('./routes/gameUserRoutes');
const cors = require('cors');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use('/api/user', userRoutes);
app.use('/api/game', gameUserRoutes);
// Error handling middleware (if needed in the future)

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
