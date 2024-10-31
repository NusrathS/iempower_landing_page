// Import required modules
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Initialize dotenv to use environment variables
dotenv.config();

// Create an instance of Express
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Enable JSON body parsing

// Mock credentials for testing
const MOCK_EMAIL = process.env.MOCK_EMAIL || 'user@example.com';
const MOCK_PASSWORD = process.env.MOCK_PASSWORD || 'password123';

// Route to handle login requests
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Check if the email and password match the mock credentials
  if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
    return res.status(200).json({ message: 'Login successful' });
  } else {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
